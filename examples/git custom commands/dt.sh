#!/bin/bash

### git difftool ###

# Exit if no arguments specified
if [ $# -eq 0 ]
	then echo "No arguments specified"
	exit 1
fi

count=$(git diff --name-only | grep -c "$1")

case "$count" in

0) echo "No files found with that name. Remember that grep is case-sensitive."
   exit 1
   ;;

1) temp=$(git diff --name-only | grep "$1")
   git difftool "$temp"
   exit 1
   ;;
   
*) echo "Too many files found. Please be more specific."
   exit 1
   ;;

esac   