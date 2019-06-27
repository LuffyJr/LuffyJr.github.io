#!/bin/bash

### git add ###

# Exit if no arguments specified
if [ $# -eq 0 ]
	then echo "No arguments specified"
	exit 1
fi

count=$(git status | grep -c "$1")

case "$count" in

0) echo "No files found with that name. Remember that grep is case-sensitive."
   exit 1
   ;;

1) # Get filepath
   temp=$(git status | grep "$1")

   # If string returned has "modified:", get rid of it
   if [[ $temp == *"modified:"* ]]
      then temp=${temp#*: }
   fi

   # Clear any leading white space
   temp=$(echo $temp | xargs)

   git add "$temp"
   exit 1
   ;;
   
*) echo "Too many files found. Please be more specific."
   exit 1
   ;;

esac 


