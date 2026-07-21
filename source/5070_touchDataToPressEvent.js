// Module ID: 5070
// Function ID: 43320
// Name: touchDataToPressEvent
// Dependencies: []

// Module 5070 (touchDataToPressEvent)
function touchDataToPressEvent(id, timestamp) {
  return { identifier: id.id, locationX: id.x, locationY: id.y, pageX: id.absoluteX, pageY: id.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
}
arg5.numberAsInset = function numberAsInset(hitSlop) {
  return { left: hitSlop, right: hitSlop, top: hitSlop, bottom: hitSlop };
};
arg5.addInsets = function addInsets(left, left2) {
  const obj = {};
  left = left.left;
  let num = 0;
  if (null != left) {
    num = left;
  }
  left2 = left2.left;
  let num2 = 0;
  if (null != left2) {
    num2 = left2;
  }
  obj.left = num + num2;
  const right = left.right;
  let num3 = 0;
  if (null != right) {
    num3 = right;
  }
  const right2 = left2.right;
  let num4 = 0;
  if (null != right2) {
    num4 = right2;
  }
  obj.right = num3 + num4;
  const top = left.top;
  let num5 = 0;
  if (null != top) {
    num5 = top;
  }
  const top2 = left2.top;
  let num6 = 0;
  if (null != top2) {
    num6 = top2;
  }
  obj.top = num5 + num6;
  const bottom = left.bottom;
  let num7 = 0;
  if (null != bottom) {
    num7 = bottom;
  }
  const bottom2 = left2.bottom;
  let num8 = 0;
  if (null != bottom2) {
    num8 = bottom2;
  }
  obj.bottom = num7 + num8;
  return obj;
};
arg5.isTouchWithinInset = function isTouchWithinInset(current, right, changedTouches) {
  let locationX;
  if (null != changedTouches) {
    locationX = changedTouches.locationX;
  }
  let num = 0;
  if (null != locationX) {
    num = locationX;
  }
  right = right.right;
  let num2 = 0;
  if (null != right) {
    num2 = right;
  }
  let tmp2 = num < num2 + current.width;
  if (tmp2) {
    let locationY;
    if (null != changedTouches) {
      locationY = changedTouches.locationY;
    }
    let num3 = 0;
    if (null != locationY) {
      num3 = locationY;
    }
    const bottom = right.bottom;
    let num4 = 0;
    if (null != bottom) {
      num4 = bottom;
    }
    tmp2 = num3 < num4 + current.height;
  }
  if (tmp2) {
    let locationX1;
    if (null != changedTouches) {
      locationX1 = changedTouches.locationX;
    }
    let num5 = 0;
    if (null != locationX1) {
      num5 = locationX1;
    }
    const left = right.left;
    let num6 = 0;
    if (null != left) {
      num6 = left;
    }
    tmp2 = num5 > -num6;
  }
  if (tmp2) {
    let locationY1;
    if (null != changedTouches) {
      locationY1 = changedTouches.locationY;
    }
    let num7 = 0;
    if (null != locationY1) {
      num7 = locationY1;
    }
    const top = right.top;
    let num8 = 0;
    if (null != top) {
      num8 = top;
    }
    tmp2 = num7 > -num8;
  }
  return tmp2;
};
arg5.gestureToPressableEvent = function gestureToPressableEvent(handlerTag) {
  const timestamp = Date.now();
  let nativeEvent = { identifier: handlerTag.handlerTag, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
  nativeEvent = { touches: items, changedTouches: items1, identifier: nativeEvent.identifier, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, force: undefined };
  const items = [nativeEvent];
  const items1 = [nativeEvent];
  return { nativeEvent };
};
arg5.gestureTouchToPressableEvent = function gestureTouchToPressableEvent(handlerTag) {
  let allTouches;
  let allTouches2;
  let changedTouches;
  const timestamp = Date.now();
  const touchDataToPressEvent = timestamp;
  let obj = {};
  obj = { touches: allTouches.map((BrowserClient) => timestamp(BrowserClient, timestamp, 0)), changedTouches: changedTouches.map((BrowserClient) => timestamp(BrowserClient, timestamp, 0)), identifier: handlerTag.handlerTag };
  ({ allTouches, changedTouches, allTouches: allTouches2 } = handlerTag);
  const atResult = allTouches2.at(0);
  let x;
  if (null != atResult) {
    x = atResult.x;
  }
  let num = -1;
  let num2 = -1;
  if (null != x) {
    num2 = x;
  }
  obj.locationX = num2;
  const allTouches3 = handlerTag.allTouches;
  const atResult1 = allTouches3.at(0);
  let y;
  if (null != atResult1) {
    y = atResult1.y;
  }
  let tmp6 = num;
  if (null != y) {
    tmp6 = y;
  }
  obj.locationY = tmp6;
  const allTouches4 = handlerTag.allTouches;
  const atResult2 = allTouches4.at(0);
  let absoluteX;
  if (null != atResult2) {
    absoluteX = atResult2.absoluteX;
  }
  let tmp9 = num;
  if (null != absoluteX) {
    tmp9 = absoluteX;
  }
  obj.pageX = tmp9;
  const allTouches5 = handlerTag.allTouches;
  const atResult3 = allTouches5.at(0);
  let absoluteY;
  if (null != atResult3) {
    absoluteY = atResult3.absoluteY;
  }
  if (null != absoluteY) {
    num = absoluteY;
  }
  obj.pageY = num;
  obj.target = 0;
  obj.timestamp = timestamp;
  obj.force = undefined;
  obj.nativeEvent = obj;
  return obj;
};
