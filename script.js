// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 51;
var expression2 = x > 49;

// TODO: Write Your JavaScript Code Here

// if (expression1 && expression2) {
//     console.log("True ✅ True ✅")
// } else if (expression1) {
//     console.log("True ✅ False ❌")
// } else if (expression2) {
//     console.log("False ❌ True ✅")
// } else {
//     console.log("False ❌ False ❌")
// }

switch (expression1, expression2) {
    case expression1 && expression2:
      console.log("True ✅ True ✅");
      break;
    case expression1:
        console.log("True ✅ False ❌")
        break;
    case expression2:
      console.log("False ❌ True ✅");
      break;
    default:
      console.log("False ❌ False ❌");
  }