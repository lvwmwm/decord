// Module ID: 160
// Function ID: 161
// Name: _construct
// Dependencies: [161, 99]

// Module 160 (_construct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 161 */;

let tmp;
const _setPrototypeOf = tmp(99);

export default function _construct(bind, arg1, arg2) {
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    return construct(...arguments);
  } else {
    const items = [null];
    const push = items.push;
    push.apply(items, arg1);
    bind = bind.bind;
    const self = this;
    const self2 = this;
    const tmp7 = new bind.apply(bind, items)();
    if (arg2) {
      _setPrototypeOf(tmp7, arg2.prototype);
    }
    return tmp7;
  }
};
