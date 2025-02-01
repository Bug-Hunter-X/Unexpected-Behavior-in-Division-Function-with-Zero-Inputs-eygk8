# Unexpected Behavior in Division Function with Zero Inputs

This repository demonstrates a common JavaScript error related to division by zero. The `foo` function is designed to divide two numbers, but it handles the zero input case inconsistently, returning 0 instead of handling the error appropriately.  This leads to unexpected behavior and potential logic errors.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a corrected version that gracefully handles division by zero, returning `NaN` or throwing an error depending on the requirement.