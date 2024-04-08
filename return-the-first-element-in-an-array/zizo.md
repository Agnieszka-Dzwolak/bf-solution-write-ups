# [zizo](https://edabit.com/user/mHaHudYExvi45DSRf)

```js
var getFirstValue = (arr) => (Array.isArray(arr) ? arr[0] : 'error');
```

## Strategy

The goal of the getFirstValue function is to retrieve the first element of an
array and return it. Zizo use the ternary operator to check if the input is
indeed an array. If the input is not an array, the function should return an
error message.

## Implementation

**Input Validation:** We use Array.isArray(arr) to check if the input arr is an
array.

**Array Check:** If arr is indeed an array, we return the first element
(arr[0]). If it's not an array, we return error.
