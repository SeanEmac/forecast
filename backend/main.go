package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Calc struct {
	Monthly int
	Rate    int
	Term    int
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
}

func calculate(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	if r.Method == "OPTIONS" {
		// Respond to options ping
		w.WriteHeader(http.StatusOK)
		return
	} else if r.Method != "POST" {
		// This endpoint only supports POST
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	// Decode the request into a struct
	var c Calc
	err := json.NewDecoder(r.Body).Decode(&c)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Write response back in json format
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(c)

	fmt.Println("Calculation done")
}

func handleRequests() {
	http.HandleFunc("/calc", calculate)
}

func main() {
	fmt.Println("Backend running:")
	handleRequests()
	http.ListenAndServe(":8080", nil)
}
