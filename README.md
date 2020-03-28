## dd-result

This package provides a `Result` type for TypeScript. It helps dealing with error conditions.

```typescript
import {
  Ok,
  Err,
  isOk,
  isErr,
  getOkValue,
  getErrMessage,
  liftResult,
  mapResult
} from "dd-result";

let a = Ok(3);
let b = Err("server returned 500");

isOk(a); // true
isErr(a); // false
isOk(a) ? getOkValue(a) : getErrMessage(a); // 3

isOk(b); // false
isErr(b); // true
isOk(b) ? getOkValue(b) : getErrMessage(b); // "server returned 500"

mapResult(a, (val: number) => val * 5); // Ok(15)
mapResult(b, (val: number) => val * 5); // Err("server returned 500")

let numberResults = [Ok(1), Ok(2), Ok(4)];
liftResult(numberResults); // Ok([1, 2, 4])
```
