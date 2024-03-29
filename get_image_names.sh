#!/bin/bash

# Define the path to the images folder
folder_path="DistATwo"

# Specify the CSV file name
csv_file="dist2.csv"

# Use a for loop to iterate through the files
for file in "$folder_path"/*.jpg; do
    # Print the path of each file and append to the CSV file
    echo "$file" >> "$csv_file"
done

echo "CSV file created: $csv_file"

