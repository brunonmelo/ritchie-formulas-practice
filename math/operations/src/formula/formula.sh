#!/bin/sh
runFormula() {
  echo "Selected operation: $OPERATION_VALUE"

  if [ "sum" == $OPERATION_VALUE ]
  then
    echo rit math sum --stdin
  elif [ "minus" == $PROVIDER ]
  then
    echo '{"first_value": "'$FIRST_VALUE'", "second_value": "'$SECOND_VALUE'"}' | rit math minus --stdin
  elif [ "multiplication" == $PROVIDER ]
  then
    echo '{}' | rit math mult --stdin
  elif [ "square root" == $PROVIDER ]
  then
    echo rit math sqrt --stdin
  fi
}
