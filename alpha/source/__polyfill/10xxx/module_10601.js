// Module ID: 10601
// Function ID: 10602
// Dependencies: [8017, 10602]

// Module 10601
import baseRest from "baseRest" /* 8017 */;
import baseDelay from "baseDelay" /* 10602 */;


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));
