import { Result, Ok, isOk, Err, isErr } from "./result";

export const liftResult = <T>(results: Array<Result<T>>): Result<Array<T>> => {
  const resultOks: Array<Ok<T>> = results.filter(isOk);
  const resultErrs: Array<Err> = results.filter(isErr);

  if (resultErrs.length > 0) {
    return Err(resultErrs.map(re => re.message).join(", "));
  } else {
    return Ok(resultOks.map(ro => ro.val));
  }
};

export const mapResult = <T, U>(r: Result<T>, f: (v: T) => U): Result<U> =>
  isOk(r) ? Ok(f(r.val)) : r;
