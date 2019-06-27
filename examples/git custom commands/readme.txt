First, you need to create a shell script file (.sh) that contains whatever you want it do.
My difftool command takes one argument, the name of the file I want to look at. 
This argument can then be referenced in the script with "$1". If there was a second argument I passed in, then I could reference it with "$2".
Now the script you made needs to be placed in "C:\Program Files\Git\mingw64\bin". I saved my file as "dt.sh".
Now at this point, you should be able to call your script like so:
We can shorten this even more by using aliases. In "C:\Program Files\Git\etc" there is a file named "bash.bashrc". If we add this line to the file: