import {
  Ok,
  isOk,
  liftResult,
  Err,
  getOkValue,
  getErrMessage,
  mapResult
} from "../src/result";

test("liftResult() with only Oks", () => {
  let res = liftResult([Ok(1), Ok(2)]);
  expect(isOk(res)).toBe(true);
  expect(getOkValue(res as Ok<number[]>)).toStrictEqual([1, 2]);
});

test("liftResult() with only Errs", () => {
  let res = liftResult([Err("eek"), Err("aargh")]);
  expect(isOk(res)).toBe(false);
  expect(getErrMessage(res as Err)).toStrictEqual("eek, aargh");
});

test("liftResult() with some Oks and some Errs", () => {
  let res = liftResult([Ok(1), Err("eek"), Ok(2), Err("aargh"), Ok(3)]);
  expect(isOk(res)).toBe(false);
  expect(getErrMessage(res as Err)).toStrictEqual("eek, aargh");
});

test("mapResult() with Ok", () => {
  let res = mapResult(Ok(7), a => a * 3);
  expect(isOk(res)).toBe(true);
  expect(getOkValue(res as Ok<number>)).toStrictEqual(21);
});

test("mapResult() with Err", () => {
  let res = mapResult(Err("aargh"), (a: number) => a * 3);
  expect(isOk(res)).toBe(false);
  expect(getErrMessage(res as Err)).toStrictEqual("aargh");
});
