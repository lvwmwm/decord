// Module ID: 16432
// Function ID: 126941
// Name: TaskType
// Dependencies: [0, 0, 0]

// Module 16432 (TaskType)
import { intl } from "result";
import { intl as intl2 } from "result";
import { intl as intl3 } from "result";
import result from "result";

let obj = { REFRESH_APP: -1, [-1]: "REFRESH_APP", EMAIL_VERIFICATION: 3, [3]: "EMAIL_VERIFICATION", AGE_VERIFICATION: 9, [9]: "AGE_VERIFICATION", PARENTAL_CONSENT_CONNECTION: 10, [10]: "PARENTAL_CONSENT_CONNECTION" };
obj = { <string:29360576>: "png", <string:252645221>: true, "Null": "/assets/images/native", "Null": 120, "Null": 62, "Null": null };
const items = [obj.PARENTAL_CONSENT_CONNECTION];
const set = new Set(Object.values(obj));
obj = { OVERVIEW: "OVERVIEW", ENTER_EMAIL: "ENTER_EMAIL", VERIFY_EMAIL: "VERIFY_EMAIL", UPDATE_APP: "UPDATE_APP", AGE_VERIFICATION: "AGE_VERIFICATION", PARENTAL_CONSENT_CONNECTION: "PARENTAL_CONSENT_CONNECTION", ERROR: "ERROR" };
const items1 = [, ];
({ ENTER_EMAIL: arr2[0], VERIFY_EMAIL: arr2[1] } = obj);
const items2 = [obj.AGE_VERIFICATION];
const items3 = [obj.PARENTAL_CONSENT_CONNECTION];
const obj1 = {};
obj1[obj.EMAIL_VERIFICATION] = intl.string(require("result").Qm6K/s);
obj1[obj.AGE_VERIFICATION] = intl2.string(require("result").dSkE/A);
obj1[obj.PARENTAL_CONSENT_CONNECTION] = intl3.string(require("result").dMMSA0);
result = result.fileFinishedImporting("modules/safety_flows/types.tsx");

export const TaskType = obj;
export const SafetyFlowComponentType = obj;
export const SUPPORTED_SAFETY_FLOW_COMPONENT_TYPES = set;
export const OWN_MODAL_TASK_TYPES = new Set(items);
export const SafetyFlowScreens = obj;
export const TASK_TYPE_TO_SCREENS = { [obj.EMAIL_VERIFICATION]: items1, [obj.AGE_VERIFICATION]: items2, [obj.PARENTAL_CONSENT_CONNECTION]: items3 };
export const TASK_TYPE_TO_TITLE = obj1;
export const TaskInputType = { Empty: "empty", VerificationCode: "verification_code" };
