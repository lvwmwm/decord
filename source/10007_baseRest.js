// Module ID: 10007
// Function ID: 10008
// Name: baseRest
// Dependencies: [8088, 10008]

// Module 10007 (baseRest)
import baseRest from "baseRest" /* 8088 */;
import baseDelay from "baseDelay" /* 10008 */;


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));
