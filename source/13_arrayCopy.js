// Module ID: 13
// Function ID: 164
// Name: arrayCopy
// Dependencies: []

// Module 13 (arrayCopy)
class Deque {
  constructor(arg0) {
    self = this;
    this._capacity = getCapacity(global);
    this._length = 0;
    this._front = 0;
    _makeCapacityResult = this._makeCapacity();
    if (isArray(global)) {
      length = global.length;
      for (let num = 0; num < length; num = num + 1) {
        self[num] = global[num];
      }
      self._length = length;
    }
    return;
  }
  toArray() {
    _length = this._length;
    array = new Array(_length);
    for (let num = 0; num < _length; num = num + 1) {
      array[num] = this[this._front + num & tmp2 - 1];
    }
    return array;
  }
  push(arg0) {
    self = this;
    length = arguments.length;
    _length = this._length;
    if (length > 1) {
      _capacity = self._capacity;
      if (_length + length > _capacity) {
        num3 = 0;
        tmp4 = _length;
        tmp5 = _length;
        if (0 < length) {
          do {
            _checkCapacityResult = self._checkCapacity(tmp4 + 1);
            self[self._front + tmp4 & self._capacity - 1] = arguments[num3];
            sum = tmp4 + 1;
            self._length = sum;
            num3 = num3 + 1;
            tmp4 = sum;
            tmp5 = sum;
          } while (num3 < length);
        }
        return tmp5;
      } else {
        _front = self._front;
        for (let num2 = 0; num2 < length; num2 = num2 + 1) {
          self[_front + _length & _capacity - 1] = arguments[num2];
          _front = _front + 1;
        }
        self._length = _length + length;
        return _length + length;
      }
    } else {
      num = 0;
      sum1 = _length;
      if (0 !== length) {
        _checkCapacityResult1 = self._checkCapacity(_length + 1);
        tmp3 = global;
        self[self._front + _length & self._capacity - 1] = global;
        self._length = _length + 1;
        sum1 = _length + 1;
      }
      return sum1;
    }
  }
  pop() {
    self = this;
    _length = this._length;
    if (0 !== _length) {
      num = 1;
      tmp = self._front + _length - 1 & self._capacity - 1;
      self[tmp] = undefined;
      self._length = _length - 1;
      return self[tmp];
    } else {
      return;
    }
  }
  shift() {
    self = this;
    _length = this._length;
    if (0 !== _length) {
      _front = self._front;
      self[_front] = undefined;
      num = 1;
      self._front = _front + 1 & self._capacity - 1;
      self._length = _length - 1;
      return self[_front];
    } else {
      return;
    }
  }
  unshift(arg0) {
    self = this;
    _length = this._length;
    length = arguments.length;
    if (length > 1) {
      _capacity2 = self._capacity;
      if (_length + length > _capacity2) {
        diff = length - 1;
        num3 = 0;
        tmp8 = _length;
        tmp9 = _length;
        if (diff >= 0) {
          do {
            _checkCapacityResult = self._checkCapacity(tmp8 + 1);
            _capacity3 = self._capacity;
            diff1 = (self._front - 1 & _capacity3 - 1 ^ _capacity3) - _capacity3;
            self[diff1] = arguments[diff];
            sum = tmp8 + 1;
            self._length = sum;
            self._front = diff1;
            diff = diff - 1;
            tmp8 = sum;
            tmp9 = sum;
          } while (diff >= 0);
        }
        return tmp9;
      } else {
        _front = self._front;
        diff2 = length - 1;
        num2 = 0;
        tmp5 = _front;
        if (diff2 >= 0) {
          do {
            diff3 = (_front - 1 & _capacity2 - 1 ^ _capacity2) - _capacity2;
            self[diff3] = arguments[diff2];
            diff2 = diff2 - 1;
            _front = diff3;
            tmp5 = diff3;
          } while (diff2 >= 0);
        }
        self._front = tmp5;
        self._length = _length + length;
        return _length + length;
      }
    } else {
      num = 0;
      if (0 === length) {
        return _length;
      } else {
        _checkCapacityResult1 = self._checkCapacity(_length + 1);
        _capacity = self._capacity;
        diff4 = (self._front - 1 & _capacity - 1 ^ _capacity) - _capacity;
        tmp3 = global;
        self[diff4] = global;
        self._length = _length + 1;
        self._front = diff4;
        return _length + 1;
      }
    }
  }
  peekBack() {
    self = this;
    _length = this._length;
    if (0 !== _length) {
      num = 1;
      return self[self._front + _length - 1 & self._capacity - 1];
    } else {
      return;
    }
  }
  peekFront() {
    self = this;
    return 0 !== this._length ? self[self._front] : undefined;
  }
  get(arg0) {
    self = this;
    if (global === (global | 0)) {
      _length = self._length;
      num = 0;
      sum = global;
      if (global < 0) {
        sum = global + _length;
      }
      if (sum >= 0) {
        if (sum < _length) {
          num2 = 1;
          return self[self._front + sum & self._capacity - 1];
        }
      }
    }
    return;
  }
  isEmpty() {
    return 0 === this._length;
  }
  clear() {
    this._length = 0;
    this._front = 0;
    _makeCapacityResult = this._makeCapacity();
    return;
  }
  toString() {
    str = this.toArray();
    return str.toString();
  }
  _makeCapacity() {
    _capacity = this._capacity;
    for (let num = 0; num < _capacity; num = num + 1) {
      this[num] = undefined;
    }
    return;
  }
  _checkCapacity(arg0) {
    self = this;
    if (this._capacity < global) {
      tmp = getCapacity;
      num = 1.5;
      num2 = 16;
      _resizeToResult = self._resizeTo(getCapacity(1.5 * self._capacity + 16));
    }
    return;
  }
  _resizeTo(arg0) {
    self = this;
    ({ _front, _capacity } = this);
    array = new Array(_capacity);
    tmp2 = array;
    _length = this._length;
    tmp3 = arrayCopy(this, 0, array, 0, _capacity);
    this._capacity = global;
    _makeCapacityResult = this._makeCapacity();
    this._front = 0;
    if (_front + _length <= _capacity) {
      tmp16 = arrayCopy;
      tmp17 = array;
      tmp18 = _front;
      tmp19 = self;
      num4 = 0;
      tmp20 = _length;
      tmp21 = arrayCopy(tmp2, _front, self, 0, _length);
    } else {
      num = 1;
      diff = _length - (_front + _length & _capacity - 1);
      tmp6 = arrayCopy;
      tmp7 = array;
      tmp8 = _front;
      tmp9 = self;
      num2 = 0;
      tmp10 = diff;
      tmp11 = arrayCopy(tmp2, _front, self, 0, diff);
      tmp12 = array;
      num3 = 0;
      tmp13 = self;
      tmp14 = diff;
      tmp15 = arrayCopy(tmp2, 0, self, diff, _length - diff);
    }
    return;
  }
}
function arrayCopy(arg0, _front, self, diff, _capacity) {
  for (let num = 0; num < _capacity; num = num + 1) {
    self[num + diff] = arg0[num + _front];
  }
}
function getCapacity(arg0) {
  let length = arg0;
  if ("number" !== typeof arg0) {
    if (isArray(arg0)) {
      length = arg0.length;
    } else {
      return 16;
    }
  }
  const diff = (Math.min(Math.max(16, length), 1073741824) >>> 0) - 1;
  return 1 + (diff | diff >> 1 | (diff | diff >> 1) >> 2 | (diff | diff >> 1 | (diff | diff >> 1) >> 2) >> 4 | (diff | diff >> 1 | (diff | diff >> 1) >> 2 | (diff | diff >> 1 | (diff | diff >> 1) >> 2) >> 4) >> 8 | (diff | diff >> 1 | (diff | diff >> 1) >> 2 | (diff | diff >> 1 | (diff | diff >> 1) >> 2) >> 4 | (diff | diff >> 1 | (diff | diff >> 1) >> 2 | (diff | diff >> 1 | (diff | diff >> 1) >> 2) >> 4) >> 8) >> 16);
}
Deque.prototype.valueOf = Deque.prototype.toString;
Deque.prototype.removeFront = Deque.prototype.shift;
Deque.prototype.removeBack = Deque.prototype.pop;
Deque.prototype.insertFront = Deque.prototype.unshift;
Deque.prototype.insertBack = Deque.prototype.push;
Deque.prototype.enqueue = Deque.prototype.push;
Deque.prototype.dequeue = Deque.prototype.shift;
Deque.prototype.toJSON = Deque.prototype.toArray;
Object.defineProperty(Deque.prototype, "length", {
  get() {
    return this._length;
  },
  set() {
    const rangeError = new RangeError("");
    throw rangeError;
  }
});

export default Deque;
