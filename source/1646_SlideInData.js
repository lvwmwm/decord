// Module ID: 1646
// Function ID: 18343
// Name: SlideInData
// Dependencies: [1640]

// Module 1646 (SlideInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { SlideInRight: obj, SlideInLeft: obj, SlideInUp: obj1, SlideInDown: obj2 };
obj = { name: "SlideInRight", style: null, duration: 0.3 };
const items = [{ translateX: "100vw" }];
const items1 = [{ translateX: "0%" }];
obj.style = { [0]: { transform: items }, [100]: { transform: items1 } };
obj = { name: "SlideInLeft", style: null, duration: 0.3 };
const items2 = [{ translateX: "-100vw" }];
const items3 = [{ translateX: "0%" }];
obj.style = { [0]: { transform: items2 }, [100]: { transform: items3 } };
obj1 = { name: "SlideInUp", style: null, duration: 0.3 };
const items4 = [{ translateY: "-100vh" }];
const items5 = [{ translateY: "0%" }];
obj1.style = { [0]: { transform: items4 }, [100]: { transform: items5 } };
obj2 = { name: "SlideInDown", style: null, duration: 0.3 };
const items6 = [{ translateY: "100vh" }];
const items7 = [{ translateY: "0%" }];
obj2.style = { [0]: { transform: items6 }, [100]: { transform: items7 } };
const obj3 = { SlideOutRight: obj4, SlideOutLeft: obj5, SlideOutUp: obj6, SlideOutDown: obj7 };
obj4 = { name: "SlideOutRight", style: null, duration: 0.3 };
const items8 = [{ translateX: "0%" }];
const items9 = [{ translateX: "100vw" }];
obj4.style = { [0]: { transform: items8 }, [100]: { transform: items9 } };
obj5 = { name: "SlideOutLeft", style: null, duration: 0.3 };
const items10 = [{ translateX: "0%" }];
const items11 = [{ translateX: "-100vw" }];
obj5.style = { [0]: { transform: items10 }, [100]: { transform: items11 } };
obj6 = { name: "SlideOutUp", style: null, duration: 0.3 };
const items12 = [{ translateY: "0%" }];
const items13 = [{ translateY: "-100vh" }];
obj6.style = { [0]: { transform: items12 }, [100]: { transform: items13 } };
obj7 = { name: "SlideOutDown", style: null, duration: 0.3 };
const items14 = [{ translateY: "0%" }];
const items15 = [{ translateY: "100vh" }];
obj7.style = { [0]: { transform: items14 }, [100]: { transform: items15 } };
const obj8 = {};
const obj9 = {};
obj9.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.SlideInRight);
obj9.duration = obj.SlideInRight.duration;
obj8.SlideInRight = obj9;
const obj10 = {};
obj10.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.SlideInLeft);
obj10.duration = obj.SlideInLeft.duration;
obj8.SlideInLeft = obj10;
const obj11 = {};
obj11.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.SlideInUp);
obj11.duration = obj.SlideInUp.duration;
obj8.SlideInUp = obj11;
const obj12 = {};
obj12.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.SlideInDown);
obj12.duration = obj.SlideInDown.duration;
obj8.SlideInDown = obj12;
const obj13 = {};
const obj14 = {};
obj14.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.SlideOutRight);
obj14.duration = obj3.SlideOutRight.duration;
obj13.SlideOutRight = obj14;
const obj15 = {};
obj15.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.SlideOutLeft);
obj15.duration = obj3.SlideOutLeft.duration;
obj13.SlideOutLeft = obj15;
const obj16 = {};
obj16.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.SlideOutUp);
obj16.duration = obj3.SlideOutUp.duration;
obj13.SlideOutUp = obj16;
const obj17 = {};
obj17.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj3.SlideOutDown);
obj17.duration = obj3.SlideOutDown.duration;
obj13.SlideOutDown = obj17;

export const SlideInData = obj;
export const SlideOutData = obj3;
export const SlideIn = obj8;
export const SlideOut = obj13;
