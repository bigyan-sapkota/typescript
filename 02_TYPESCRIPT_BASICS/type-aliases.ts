type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = +input1 + +input2;
    return result;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
