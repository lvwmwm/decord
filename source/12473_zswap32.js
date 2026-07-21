// Module ID: 12473
// Function ID: 95317
// Name: zswap32
// Dependencies: [0]

// Module 12473 (zswap32)
function zswap32(buf8) {
  return (buf8 >>> 24 & 255) + (buf8 >>> 8 & 65280) + ((65280 & buf8) << 8) + ((255 & buf8) << 24);
}
function InflateState() {
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  const buf16 = new arg1(arg6[0]).Buf16(320);
  this.lens = buf16;
  const buf161 = new arg1(arg6[0]).Buf16(288);
  this.work = buf161;
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
function inflateResetKeep(state) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      state = state.state;
      state.total = 0;
      state.total_out = 0;
      state.total_in = 0;
      state.msg = "";
      if (state.wrap) {
        state.adler = 1 & state.wrap;
      }
      state.mode = 1;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      const Buf32 = arg1(arg6[0]).Buf32;
      const prototype = Buf32.prototype;
      const buf32 = new Buf32(852);
      state.lendyn = buf32;
      state.lencode = buf32;
      const Buf322 = arg1(arg6[0]).Buf32;
      const prototype2 = Buf322.prototype;
      const buf322 = new Buf322(592);
      state.distdyn = buf322;
      state.distcode = buf322;
      state.sane = 1;
      state.back = -1;
      num = 0;
    }
  }
  return num;
}
function inflateReset(state) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      state = state.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      num = inflateResetKeep(state);
    }
  }
  return num;
}
function inflateReset2(state, windowBits) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      state = state.state;
      if (windowBits < 0) {
        let tmp2 = -windowBits;
        let num6 = 0;
      } else {
        const sum = 1 + (windowBits >> 4);
        num6 = sum;
        tmp2 = windowBits;
        if (windowBits < 48) {
          tmp2 = windowBits & 15;
          num6 = sum;
        }
      }
      if (!tmp2) {
        if (tmp4) {
          state.window = null;
        }
        state.wrap = num6;
        state.wbits = tmp2;
        let num9 = inflateReset(state);
        const tmp4 = null !== state.window && state.wbits !== tmp2;
      } else {
        num9 = -2;
        if (tmp2 >= 8) {
          num9 = -2;
        }
      }
      num = num9;
    }
  }
  return num;
}
function inflateInit2(strm, windowBits) {
  let num = -2;
  if (strm) {
    const prototype = InflateState.prototype;
    const tmp4 = new InflateState();
    strm.state = tmp4;
    tmp4.window = null;
    const tmp9 = inflateReset2(strm, windowBits);
    num = tmp9;
    if (0 !== tmp9) {
      strm.state = null;
      num = tmp9;
    }
  }
  return num;
}
function fixedtables(state) {
  let sum;
  if (closure_4) {
    const Buf32 = arg1(arg6[0]).Buf32;
    const prototype = Buf32.prototype;
    const buf32 = new Buf32(512);
    const Buf322 = arg1(arg6[0]).Buf32;
    const prototype2 = Buf322.prototype;
    const buf322 = new Buf322(32);
    let num7 = 0;
    do {
      let tmp11 = +num7;
      sum = tmp11 + 1;
      state.lens[tmp11] = 8;
      num7 = sum;
    } while (sum < 144);
    let sum1 = sum;
    let tmp14 = sum;
    if (sum < 256) {
      do {
        let tmp15 = +sum1;
        sum1 = tmp15 + 1;
        state.lens[tmp15] = 9;
        tmp14 = sum1;
      } while (sum1 < 256);
    }
    let sum2 = tmp14;
    let sum3 = tmp14;
    if (tmp14 < 280) {
      do {
        let tmp18 = +sum2;
        sum2 = tmp18 + 1;
        state.lens[tmp18] = 7;
        sum3 = sum2;
      } while (sum2 < 280);
    }
    if (sum3 < 288) {
      do {
        let tmp19 = +sum3;
        sum3 = tmp19 + 1;
        state.lens[tmp19] = 8;
      } while (sum3 < 288);
    }
    let obj = { bits: 9 };
    arg1(arg6[1])(1, state.lens, 0, 288, buf32, 0, state.work, obj);
    let num19 = 0;
    do {
      let tmp25 = +num19;
      num19 = tmp25 + 1;
      state.lens[tmp25] = 5;
    } while (num19 < 32);
    obj = { bits: 5 };
    arg1(arg6[1])(2, state.lens, 0, 32, buf322, 0, state.work, obj);
    closure_4 = false;
  }
  state.lencode = buf32;
  state.lenbits = 9;
  state.distcode = buf322;
  state.distbits = 5;
}
function updatewindow(state, output3, length, buf8) {
  state = state.state;
  if (null === state.window) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    const Buf8 = output3(arg6[0]).Buf8;
    const prototype = Buf8.prototype;
    buf8 = new Buf8(state.wsize);
    state.window = buf8;
  }
  if (buf8 >= state.wsize) {
    const obj3 = output3(arg6[0]);
    obj3.arraySet(state.window, output3, length - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    let diff = state.wsize - state.wnext;
    if (diff > buf8) {
      diff = buf8;
    }
    const obj = output3(arg6[0]);
    obj.arraySet(state.window, output3, length - buf8, diff, state.wnext);
    const diff1 = buf8 - diff;
    if (diff1) {
      const obj2 = output3(arg6[0]);
      obj2.arraySet(state.window, output3, length - diff1, diff1, 0);
      state.wnext = diff1;
      state.whave = state.wsize;
    } else {
      state.wnext = state.wnext + diff;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave = state.whave + diff;
      }
    }
  }
  return 0;
}
let closure_4 = true;
arg5.inflateReset = inflateReset;
arg5.inflateReset2 = inflateReset2;
arg5.inflateResetKeep = inflateResetKeep;
arg5.inflateInit = function inflateInit(strm) {
  return inflateInit2(strm, 15);
};
arg5.inflateInit2 = inflateInit2;
arg5.inflate = function inflate(state) {
  let avail_in;
  let avail_in2;
  let avail_out;
  let avail_out2;
  let bits;
  let bits3;
  let hold;
  let hold2;
  let input;
  let input2;
  let mode;
  let next_in;
  let next_in2;
  let next_out;
  let next_out2;
  let output;
  let output2;
  let tmp24;
  let buf8 = new arg1(arg6[0]).Buf8(4);
  const items = [];
  if (state) {
    if (state.state) {
      if (state.output) {
        state = state.state;
        let num = 12;
        if (state.mode === 12) {
          state.mode = 13;
        }
        ({ next_out, output, avail_out, next_in, input, avail_in } = state);
        ({ hold, bits } = state);
        let diff2 = avail_in;
        let tmp6 = avail_out;
        let num50 = 0;
        while (true) {
          mode = state.mode;
          let tmp16 = input;
          let tmp17 = output;
          let tmp18 = next_in;
          let tmp19 = next_out;
          let tmp20 = diff2;
          let tmp21 = avail_out;
          let tmp22 = hold;
          let tmp23 = bits;
          tmp24 = tmp6;
          let tmp25 = tmp7;
          let tmp26 = tmp8;
          let tmp27 = tmp9;
          let tmp28 = tmp10;
          let tmp29 = tmp11;
          let tmp30 = tmp12;
          let tmp31 = tmp13;
          let tmp32 = tmp14;
          let tmp33 = num50;
          let tmp34 = tmp15;
          if (1 === mode) {
            if (0 === state.wrap) {
              state.mode = 13;
              // continue
            } else {
              buf8 = next_in;
              buf8 = diff2;
              buf8 = hold;
              buf8 = bits;
              buf8 = next_in;
              buf8 = diff2;
              buf8 = hold;
              buf8 = bits;
              if (bits >= 16) {
                if (2 & state.wrap) {
                  if (35615 === buf8) {
                    state.check = 0;
                    buf8[0] = 255 & buf8;
                    buf8[1] = buf8 >>> 8 & 255;
                    buf8 = arg1;
                    buf8 = arg6;
                    buf8 = num58;
                    buf8 = num58;
                    let check11 = state.check;
                    buf8 = check11;
                    let num96 = 2;
                    let num58 = 0;
                    let num97 = 0;
                    state.check = arg1(arg6[2])(check11, tmp2, 2, 0);
                    state.mode = 2;
                    next_in = buf8;
                    diff2 = buf8;
                    hold = 0;
                    bits = 0;
                    // continue
                  }
                }
                state.flags = 0;
                if (state.head) {
                  state.head.done = false;
                }
                if (1 & state.wrap) {
                  if (!((((255 & buf8) << 8) + (buf8 >> 8)) % 31)) {
                    if (8 !== (15 & buf8)) {
                      state.msg = "unknown compression method";
                      state.mode = 30;
                      next_in = buf8;
                      diff2 = buf8;
                      hold = buf8;
                      bits = buf8;
                      // continue
                    } else {
                      bits = buf8 - 4;
                      buf8 = buf8 >>> 4;
                      buf8 = 8 + (15 & buf8);
                      if (0 === state.wbits) {
                        state.wbits = buf8;
                      } else {
                        if (buf8 > state.wbits) {
                          state.msg = "invalid window size";
                          state.mode = 30;
                          next_in = buf8;
                          diff2 = buf8;
                          hold = buf8;
                          let tmp14 = buf8;
                          // continue
                        }
                        continue;
                      }
                      state.dmax = 1 << buf8;
                      state.check = 1;
                      state.adler = 1;
                      let num95 = 10;
                      if (!(512 & buf8)) {
                        num95 = 12;
                      }
                      state.mode = num95;
                      next_in = buf8;
                      diff2 = buf8;
                      hold = 0;
                      bits = 0;
                      tmp14 = buf8;
                      // continue
                    }
                    continue;
                  }
                  continue;
                }
                state.msg = "incorrect header check";
                state.mode = 30;
                next_in = buf8;
                diff2 = buf8;
                hold = buf8;
                bits = buf8;
                // continue
              } else {
                let tmp50 = buf8;
                let num55 = buf8;
                let num56 = buf8;
                let tmp51 = tmp6;
                let num57 = num50;
                let tmp52 = buf8;
                while (0 !== buf8) {
                  buf8 = buf8 - 1;
                  buf8 = +buf8;
                  buf8 = buf8 + 1;
                  buf8 = buf8 + (input[buf8] << buf8);
                  buf8 = buf8 + 8;
                  continue;
                }
              }
            }
          } else {
            if (2 === mode) {
              buf8 = next_in;
              buf8 = diff2;
              buf8 = hold;
              buf8 = bits;
              buf8 = next_in;
              buf8 = diff2;
              buf8 = hold;
              buf8 = bits;
              if (bits >= 16) {
                state.flags = buf8;
                if (8 !== (255 & state.flags)) {
                  state.msg = "unknown compression method";
                  state.mode = 30;
                  next_in = buf8;
                  diff2 = buf8;
                  hold = buf8;
                  bits = buf8;
                  // continue
                } else if (57344 & state.flags) {
                  state.msg = "unknown header flags set";
                  state.mode = 30;
                  next_in = buf8;
                  diff2 = buf8;
                  hold = buf8;
                  bits = buf8;
                  // continue
                } else {
                  if (state.head) {
                    state.head.text = buf8 >> 8 & 1;
                  }
                  if (512 & state.flags) {
                    buf8[0] = 255 & buf8;
                    buf8[1] = buf8 >>> 8 & 255;
                    buf8 = arg1;
                    buf8 = arg6;
                    buf8 = num58;
                    buf8 = num58;
                    let check4 = state.check;
                    buf8 = check4;
                    let num77 = 2;
                    num58 = 0;
                    let num78 = 0;
                    state.check = arg1(arg6[2])(check4, tmp2, 2, 0);
                  }
                  state.mode = 3;
                  let num79 = 0;
                  let num80 = 0;
                }
                continue;
              } else {
                tmp50 = buf8;
                num55 = buf8;
                num56 = buf8;
                tmp51 = tmp6;
                num57 = num50;
                tmp52 = buf8;
                while (0 !== buf8) {
                  buf8 = buf8 - 1;
                  buf8 = +buf8;
                  buf8 = buf8 + 1;
                  buf8 = buf8 + (input[buf8] << buf8);
                  buf8 = buf8 + 8;
                  continue;
                }
              }
            } else {
              buf8 = next_in;
              buf8 = diff2;
              num79 = hold;
              num80 = bits;
              if (3 !== mode) {
                buf8 = next_in;
                buf8 = diff2;
                let num83 = hold;
                let num84 = bits;
                if (4 !== mode) {
                  buf8 = next_in;
                  buf8 = diff2;
                  let num87 = hold;
                  let num88 = bits;
                  if (5 !== mode) {
                    buf8 = next_in;
                    buf8 = diff2;
                    buf8 = hold;
                    buf8 = bits;
                    if (6 === mode) {
                      buf8 = tmp18;
                      buf8 = tmp20;
                      buf8 = tmp7;
                      buf8 = tmp14;
                      if (!(1024 & state.flags)) {
                        state.length = 0;
                        state.mode = 7;
                        buf8 = tmp22;
                        buf8 = tmp23;
                      } else {
                        let length9 = state.length;
                        if (length9 > tmp20) {
                          length9 = tmp20;
                        }
                        buf8 = tmp18;
                        buf8 = tmp20;
                        buf8 = tmp14;
                        if (length9) {
                          buf8 = tmp14;
                          if (state.head) {
                            buf8 = state.head.extra_len - state.length;
                            if (!state.head.extra) {
                              let _Array = Array;
                              num58 = state.head.extra_len;
                              buf8 = num58;
                              buf8 = new.target;
                              buf8 = new.target;
                              buf8 = new Array(num58);
                              state.head.extra = buf8;
                            }
                            buf8 = arg1;
                            buf8 = arg6;
                            buf8 = num58;
                            buf8 = num58;
                            let obj3 = arg1(arg6[0]);
                            num58 = state.head.extra;
                            buf8 = num58;
                            buf8 = obj3;
                            buf8 = input;
                            buf8 = tmp18;
                            buf8 = length9;
                            buf8 = obj3.arraySet(num58, tmp16, buf8, length9, buf8);
                          }
                          if (512 & state.flags) {
                            buf8 = arg1;
                            buf8 = arg6;
                            buf8 = num58;
                            buf8 = num58;
                            let check8 = state.check;
                            buf8 = check8;
                            buf8 = input;
                            buf8 = length9;
                            buf8 = tmp18;
                            state.check = arg1(arg6[2])(check8, tmp16, length9, buf8);
                          }
                          buf8 = tmp20 - length9;
                          buf8 = tmp18 + length9;
                          state.length = state.length - length9;
                        }
                        buf8 = length9;
                        tmp50 = buf8;
                        tmp52 = buf8;
                        num55 = tmp22;
                        num56 = tmp23;
                        tmp51 = tmp6;
                        num57 = num50;
                      }
                    } else {
                      buf8 = next_in;
                      buf8 = diff2;
                      buf8 = hold;
                      buf8 = bits;
                      buf8 = tmp7;
                      buf8 = tmp14;
                      if (7 !== mode) {
                        buf8 = diff2;
                        buf8 = hold;
                        buf8 = bits;
                        buf8 = tmp7;
                        buf8 = tmp14;
                        if (8 === mode) {
                          if (4096 & state.flags) {
                            let num94 = 0;
                            tmp50 = tmp18;
                            num55 = tmp22;
                            num56 = tmp23;
                            tmp51 = tmp6;
                            num57 = num50;
                            tmp52 = tmp20;
                            if (0 !== tmp20) {
                              while (true) {
                                buf8 = +num94;
                                buf8 = buf8 + 1;
                                buf8 = input[tmp18 + buf8];
                                buf8 = state.head && buf8 && state.length < 65536;
                                if (buf8) {
                                  let head2 = state.head;
                                  let _String2 = String;
                                  buf8 = num58;
                                  buf8 = num58;
                                  head2.comment = head2.comment + String.fromCharCode(buf8);
                                }
                                if (!buf8) {
                                  break;
                                } else {
                                  num94 = buf8;
                                  if (buf8 >= tmp20) {
                                    break;
                                  }
                                }
                              }
                              if (512 & state.flags) {
                                buf8 = arg1;
                                buf8 = arg6;
                                buf8 = num58;
                                buf8 = num58;
                                let check10 = state.check;
                                buf8 = check10;
                                buf8 = input;
                                buf8 = tmp18;
                                state.check = arg1(arg6[2])(check10, tmp16, buf8, buf8);
                              }
                              buf8 = tmp20 - buf8;
                              buf8 = tmp18 + buf8;
                              tmp50 = buf8;
                              tmp52 = buf8;
                              num55 = tmp22;
                              num56 = tmp23;
                              tmp51 = tmp6;
                              num57 = num50;
                            }
                          } else {
                            buf8 = tmp18;
                            buf8 = tmp20;
                            buf8 = tmp25;
                            buf8 = tmp32;
                            if (state.head) {
                              state.head.comment = null;
                              buf8 = tmp18;
                              buf8 = tmp20;
                              buf8 = tmp25;
                              buf8 = tmp32;
                            }
                          }
                          state.mode = 9;
                          buf8 = tmp22;
                          buf8 = tmp23;
                        } else {
                          buf8 = next_in;
                          buf8 = diff2;
                          buf8 = hold;
                          buf8 = bits;
                          buf8 = tmp7;
                          buf8 = tmp14;
                          if (9 === mode) {
                            next_in = tmp18;
                            diff2 = tmp20;
                            hold = tmp22;
                            bits = tmp23;
                            if (512 & state.flags) {
                              buf8 = tmp18;
                              buf8 = tmp20;
                              buf8 = tmp22;
                              buf8 = tmp23;
                              buf8 = tmp18;
                              buf8 = tmp20;
                              buf8 = tmp22;
                              buf8 = tmp23;
                              if (tmp23 >= 16) {
                                next_in = buf8;
                                diff2 = buf8;
                                hold = 0;
                                bits = 0;
                                if (buf8 !== (65535 & state.check)) {
                                  state.msg = "header crc mismatch";
                                  state.mode = 30;
                                  next_in = buf8;
                                  diff2 = buf8;
                                  hold = buf8;
                                  bits = buf8;
                                  let tmp7 = tmp25;
                                  tmp14 = tmp32;
                                  // continue
                                }
                              } else {
                                tmp50 = buf8;
                                num55 = buf8;
                                num56 = buf8;
                                tmp51 = tmp6;
                                num57 = num50;
                                tmp52 = buf8;
                                while (0 !== buf8) {
                                  buf8 = buf8 - 1;
                                  buf8 = +buf8;
                                  buf8 = buf8 + 1;
                                  buf8 = buf8 + (input[buf8] << buf8);
                                  buf8 = buf8 + 8;
                                  break;
                                }
                              }
                            }
                            if (state.head) {
                              state.head.hcrc = state.flags >> 9 & 1;
                              state.head.done = true;
                            }
                            state.check = 0;
                            state.adler = 0;
                            state.mode = 12;
                            tmp7 = tmp25;
                            tmp14 = tmp32;
                            // continue
                          } else {
                            if (10 === mode) {
                              buf8 = next_in;
                              buf8 = diff2;
                              buf8 = hold;
                              buf8 = bits;
                              buf8 = next_in;
                              buf8 = diff2;
                              buf8 = hold;
                              if (bits >= 32) {
                                buf8 = zswap32;
                                buf8 = num58;
                                buf8 = num58;
                                buf8 = zswap32(buf8);
                                state.check = buf8;
                                state.adler = buf8;
                                state.mode = 11;
                                let num75 = 0;
                                let num76 = 0;
                              } else {
                                tmp50 = buf8;
                                num55 = buf8;
                                num56 = buf8;
                                tmp51 = tmp6;
                                num57 = num50;
                                tmp52 = buf8;
                                while (0 !== buf8) {
                                  buf8 = buf8 - 1;
                                  buf8 = +buf8;
                                  buf8 = buf8 + 1;
                                  buf8 = buf8 + (input[buf8] << buf8);
                                  buf8 = buf8 + 8;
                                  break;
                                }
                              }
                            } else {
                              buf8 = next_in;
                              buf8 = diff2;
                              num75 = hold;
                              num76 = bits;
                              if (11 !== mode) {
                                buf8 = next_in;
                                buf8 = diff2;
                                buf8 = hold;
                                buf8 = bits;
                                if (12 !== mode) {
                                  buf8 = next_in;
                                  buf8 = diff2;
                                  buf8 = hold;
                                  buf8 = bits;
                                  if (13 !== mode) {
                                    if (14 === mode) {
                                      buf8 = hold >>> (7 & bits);
                                      buf8 = bits - (7 & bits);
                                      buf8 = next_in;
                                      buf8 = diff2;
                                      buf8 = next_in;
                                      buf8 = diff2;
                                      if (buf8 >= 32) {
                                        buf8 = 65535 & buf8;
                                        if (buf8 !== (buf8 >>> 16 ^ 65535)) {
                                          state.msg = "invalid stored block lengths";
                                          state.mode = 30;
                                          next_in = buf8;
                                          diff2 = buf8;
                                          hold = buf8;
                                          bits = buf8;
                                          // continue
                                        } else {
                                          state.length = buf8;
                                          state.mode = 15;
                                          num = 0;
                                          num = 0;
                                          tmp50 = buf8;
                                          tmp52 = buf8;
                                          num55 = 0;
                                          num56 = 0;
                                          tmp51 = tmp6;
                                          num57 = num50;
                                        }
                                      } else {
                                        tmp50 = buf8;
                                        num55 = buf8;
                                        num56 = buf8;
                                        tmp51 = tmp6;
                                        num57 = num50;
                                        tmp52 = buf8;
                                        while (0 !== buf8) {
                                          buf8 = buf8 - 1;
                                          buf8 = +buf8;
                                          buf8 = buf8 + 1;
                                          buf8 = buf8 + (input[buf8] << buf8);
                                          buf8 = buf8 + 8;
                                          break;
                                        }
                                      }
                                    } else {
                                      buf8 = next_in;
                                      buf8 = diff2;
                                      num = hold;
                                      num = bits;
                                      if (15 !== mode) {
                                        buf8 = next_in;
                                        buf8 = diff2;
                                        buf8 = hold;
                                        buf8 = bits;
                                        if (16 !== mode) {
                                          if (17 === mode) {
                                            buf8 = next_in;
                                            buf8 = diff2;
                                            buf8 = hold;
                                            buf8 = bits;
                                            buf8 = next_in;
                                            buf8 = diff2;
                                            buf8 = hold;
                                            buf8 = bits;
                                            if (bits >= 14) {
                                              state.nlen = 257 + (31 & buf8);
                                              buf8 = buf8 >>> 5;
                                              state.ndist = 1 + (31 & buf8);
                                              buf8 = buf8 >>> 5;
                                              state.ncode = 4 + (15 & buf8);
                                              buf8 = buf8 >>> 4;
                                              buf8 = buf8 - 5 - 5 - 4;
                                              if (state.nlen <= 286) {
                                                if (state.ndist <= 30) {
                                                  state.have = 0;
                                                  state.mode = 18;
                                                }
                                              }
                                              state.msg = "too many length or distance symbols";
                                              state.mode = 30;
                                              next_in = buf8;
                                              diff2 = buf8;
                                              hold = buf8;
                                              bits = buf8;
                                              // continue
                                            } else {
                                              tmp50 = buf8;
                                              num55 = buf8;
                                              num56 = buf8;
                                              tmp51 = tmp6;
                                              num57 = num50;
                                              tmp52 = buf8;
                                              while (0 !== buf8) {
                                                buf8 = buf8 - 1;
                                                buf8 = +buf8;
                                                buf8 = buf8 + 1;
                                                buf8 = buf8 + (input[buf8] << buf8);
                                                buf8 = buf8 + 8;
                                                break;
                                              }
                                            }
                                          } else {
                                            buf8 = next_in;
                                            buf8 = diff2;
                                            buf8 = hold;
                                            buf8 = bits;
                                            if (18 !== mode) {
                                              buf8 = next_in;
                                              buf8 = diff2;
                                              buf8 = hold;
                                              buf8 = bits;
                                              buf8 = num50;
                                              if (19 !== mode) {
                                                buf8 = next_in;
                                                buf8 = diff2;
                                                buf8 = hold;
                                                buf8 = bits;
                                                buf8 = tmp7;
                                                buf8 = tmp8;
                                                buf8 = tmp9;
                                                buf8 = tmp10;
                                                buf8 = tmp14;
                                                buf8 = num50;
                                                buf8 = tmp15;
                                                if (20 !== mode) {
                                                  buf8 = next_in;
                                                  buf8 = diff2;
                                                  buf8 = hold;
                                                  buf8 = bits;
                                                  buf8 = tmp7;
                                                  buf8 = tmp8;
                                                  buf8 = tmp9;
                                                  buf8 = tmp10;
                                                  buf8 = tmp14;
                                                  buf8 = num50;
                                                  buf8 = tmp15;
                                                  if (21 !== mode) {
                                                    buf8 = next_in;
                                                    buf8 = diff2;
                                                    buf8 = hold;
                                                    buf8 = bits;
                                                    buf8 = tmp7;
                                                    buf8 = tmp11;
                                                    buf8 = tmp12;
                                                    buf8 = tmp13;
                                                    buf8 = tmp14;
                                                    buf8 = num50;
                                                    buf8 = tmp15;
                                                    if (22 !== mode) {
                                                      buf8 = next_in;
                                                      buf8 = diff2;
                                                      buf8 = hold;
                                                      buf8 = bits;
                                                      buf8 = tmp7;
                                                      buf8 = tmp11;
                                                      buf8 = tmp12;
                                                      buf8 = tmp13;
                                                      buf8 = tmp14;
                                                      buf8 = num50;
                                                      buf8 = tmp15;
                                                      if (23 !== mode) {
                                                        buf8 = next_in;
                                                        buf8 = diff2;
                                                        buf8 = hold;
                                                        buf8 = bits;
                                                        buf8 = tmp7;
                                                        buf8 = tmp8;
                                                        buf8 = tmp9;
                                                        buf8 = tmp10;
                                                        buf8 = tmp11;
                                                        buf8 = tmp12;
                                                        buf8 = tmp13;
                                                        buf8 = tmp14;
                                                        buf8 = num50;
                                                        buf8 = tmp15;
                                                        if (24 !== mode) {
                                                          buf8 = next_in;
                                                          buf8 = diff2;
                                                          buf8 = hold;
                                                          buf8 = bits;
                                                          buf8 = tmp8;
                                                          buf8 = tmp9;
                                                          buf8 = tmp10;
                                                          buf8 = tmp11;
                                                          buf8 = tmp12;
                                                          buf8 = tmp13;
                                                          buf8 = tmp14;
                                                          buf8 = num50;
                                                          buf8 = tmp15;
                                                          if (25 !== mode) {
                                                            if (26 === mode) {
                                                              tmp50 = next_in;
                                                              tmp52 = diff2;
                                                              num55 = hold;
                                                              num56 = bits;
                                                              tmp51 = tmp6;
                                                              num57 = num50;
                                                              if (0 !== avail_out) {
                                                                buf8 = +next_out;
                                                                next_out = buf8 + 1;
                                                                output[buf8] = state.length;
                                                                avail_out = avail_out - 1;
                                                                state.mode = 21;
                                                                // continue
                                                              }
                                                            } else {
                                                              if (27 === mode) {
                                                                let tmp39 = next_in;
                                                                let tmp40 = diff2;
                                                                let num53 = hold;
                                                                let num54 = bits;
                                                                let tmp41 = tmp6;
                                                                if (!state.wrap) {
                                                                  state.mode = 28;
                                                                  let tmp35 = tmp39;
                                                                  let tmp36 = tmp40;
                                                                  let tmp37 = num53;
                                                                  let tmp38 = num54;
                                                                  tmp6 = tmp41;
                                                                } else {
                                                                  let tmp42 = next_in;
                                                                  let tmp43 = diff2;
                                                                  let tmp44 = hold;
                                                                  let tmp45 = bits;
                                                                  let tmp46 = next_in;
                                                                  let tmp47 = diff2;
                                                                  let tmp48 = hold;
                                                                  let tmp49 = bits;
                                                                  if (bits >= 32) {
                                                                    let diff = tmp6 - avail_out;
                                                                    let tmp54 = diff;
                                                                    let total_out = state.total_out;
                                                                    let tmp55 = total_out;
                                                                    let tmp56 = total_out;
                                                                    let tmp57 = diff;
                                                                    let sum = total_out + diff;
                                                                    let tmp59 = sum;
                                                                    let tmp60 = sum;
                                                                    state.total_out = sum;
                                                                    let total = state.total;
                                                                    let tmp61 = total;
                                                                    let tmp62 = total;
                                                                    let tmp63 = diff;
                                                                    let sum1 = total + diff;
                                                                    let tmp65 = sum1;
                                                                    let tmp66 = sum1;
                                                                    state.total = sum1;
                                                                    let tmp67 = diff;
                                                                    if (!diff) {
                                                                      let flags2 = state.flags;
                                                                      buf8 = flags2;
                                                                      buf8 = tmp48;
                                                                      buf8 = flags2;
                                                                      if (!flags2) {
                                                                        buf8 = zswap32;
                                                                        buf8 = zswap32;
                                                                        buf8 = zswap32;
                                                                        buf8 = zswap32;
                                                                        buf8 = zswap32;
                                                                        buf8 = zswap32(tmp48);
                                                                      }
                                                                      let check3 = state.check;
                                                                      buf8 = check3;
                                                                      tmp39 = tmp46;
                                                                      tmp40 = tmp47;
                                                                      num53 = 0;
                                                                      num54 = 0;
                                                                      tmp41 = avail_out;
                                                                      num58 = buf8;
                                                                      buf8 = check3;
                                                                      if (buf8 !== check3) {
                                                                        state.msg = "incorrect data check";
                                                                        state.mode = 30;
                                                                        next_in = tmp46;
                                                                        diff2 = tmp47;
                                                                        hold = tmp48;
                                                                        bits = tmp49;
                                                                        tmp6 = avail_out;
                                                                        // continue
                                                                      }
                                                                    } else {
                                                                      let flags = state.flags;
                                                                      let tmp68 = flags;
                                                                      let tmp69 = arg1;
                                                                      let tmp70 = arg1;
                                                                      let tmp71 = arg6;
                                                                      let tmp72 = arg6;
                                                                      let tmp73 = flags;
                                                                      if (flags) {
                                                                        let tmp92 = tmp72;
                                                                        let tmp93 = tmp72[2];
                                                                        tmp72 = tmp93;
                                                                        let tmp94 = tmp93;
                                                                        let tmp95 = tmp93;
                                                                        let tmp96 = tmp93;
                                                                        let tmp97 = tmp69;
                                                                        let tmp98 = tmp93;
                                                                        let tmp70Result = tmp70(tmp93);
                                                                        buf8 = tmp70Result;
                                                                        let check2 = state.check;
                                                                        buf8 = check2;
                                                                        buf8 = diff;
                                                                        buf8 = next_out - tmp54;
                                                                        buf8 = output;
                                                                        buf8 = diff;
                                                                        buf8 = tmp70Result;
                                                                        let tmp70ResultResult = tmp70Result(check2, tmp17, tmp54, buf8);
                                                                      } else {
                                                                        let tmp74 = tmp72;
                                                                        let tmp75 = tmp72[4];
                                                                        let tmp76 = tmp75;
                                                                        let tmp77 = tmp75;
                                                                        let tmp78 = tmp75;
                                                                        let tmp79 = tmp75;
                                                                        let tmp80 = tmp69;
                                                                        let tmp81 = tmp75;
                                                                        tmp70Result = tmp70(tmp75);
                                                                        let tmp83 = tmp70Result;
                                                                        let check = state.check;
                                                                        let tmp84 = check;
                                                                        let tmp85 = diff;
                                                                        let diff1 = next_out - tmp54;
                                                                        let tmp87 = diff1;
                                                                        let tmp88 = output;
                                                                        let tmp89 = diff;
                                                                        let tmp90 = tmp70Result;
                                                                        tmp70ResultResult = tmp70Result(check, tmp17, tmp54, diff1);
                                                                      }
                                                                      buf8 = tmp70ResultResult;
                                                                      state.check = tmp70ResultResult;
                                                                      buf8 = tmp70ResultResult;
                                                                      state.adler = tmp70ResultResult;
                                                                    }
                                                                  } else {
                                                                    tmp50 = tmp42;
                                                                    num55 = tmp44;
                                                                    num56 = tmp45;
                                                                    tmp51 = tmp6;
                                                                    num57 = num50;
                                                                    tmp52 = tmp43;
                                                                    while (0 !== tmp43) {
                                                                      buf8 = tmp43;
                                                                      buf8 = tmp43 - 1;
                                                                      tmp43 = buf8;
                                                                      buf8 = tmp42;
                                                                      buf8 = +tmp42;
                                                                      buf8 = buf8 + 1;
                                                                      tmp42 = buf8;
                                                                      buf8 = input[buf8];
                                                                      buf8 = tmp45;
                                                                      buf8 = buf8 << tmp45;
                                                                      buf8 = tmp44;
                                                                      buf8 = tmp44 | buf8;
                                                                      tmp44 = buf8;
                                                                      buf8 = tmp45;
                                                                      num58 = tmp45 + 8;
                                                                      tmp45 = num58;
                                                                      tmp46 = buf8;
                                                                      tmp47 = buf8;
                                                                      tmp48 = buf8;
                                                                      tmp49 = num58;
                                                                      break;
                                                                    }
                                                                  }
                                                                }
                                                              } else {
                                                                tmp35 = next_in;
                                                                tmp36 = diff2;
                                                                tmp37 = hold;
                                                                tmp38 = bits;
                                                                if (28 !== mode) {
                                                                  break;
                                                                }
                                                              }
                                                              let wrap = state.wrap;
                                                              buf8 = wrap;
                                                              buf8 = tmp35;
                                                              buf8 = tmp36;
                                                              let num59 = tmp37;
                                                              let num60 = tmp38;
                                                              buf8 = wrap;
                                                              if (wrap) {
                                                                let flags3 = state.flags;
                                                                buf8 = flags3;
                                                                buf8 = tmp35;
                                                                buf8 = tmp36;
                                                                num59 = tmp37;
                                                                num60 = tmp38;
                                                                buf8 = flags3;
                                                                if (flags3) {
                                                                  buf8 = tmp35;
                                                                  buf8 = tmp36;
                                                                  buf8 = tmp37;
                                                                  buf8 = tmp38;
                                                                  next_in = tmp35;
                                                                  diff2 = tmp36;
                                                                  hold = tmp37;
                                                                  bits = tmp38;
                                                                  num58 = tmp38;
                                                                  if (tmp38 >= 32) {
                                                                    let total2 = state.total;
                                                                    buf8 = total2;
                                                                    buf8 = total2;
                                                                    buf8 = 4294967295 & total2;
                                                                    buf8 = next_in;
                                                                    buf8 = diff2;
                                                                    num59 = 0;
                                                                    num60 = 0;
                                                                    num58 = buf8;
                                                                    if (hold !== buf8) {
                                                                      state.msg = "incorrect length check";
                                                                      state.mode = 30;
                                                                      // continue
                                                                    }
                                                                  } else {
                                                                    tmp50 = buf8;
                                                                    num55 = buf8;
                                                                    num56 = buf8;
                                                                    tmp51 = tmp6;
                                                                    num57 = num50;
                                                                    tmp52 = buf8;
                                                                    while (0 !== buf8) {
                                                                      buf8 = buf8 - 1;
                                                                      buf8 = +buf8;
                                                                      buf8 = buf8 + 1;
                                                                      buf8 = input[buf8];
                                                                      buf8 = buf8 << buf8;
                                                                      buf8 = buf8 + buf8;
                                                                      num58 = buf8 + 8;
                                                                      buf8 = num58;
                                                                      next_in = buf8;
                                                                      diff2 = buf8;
                                                                      hold = buf8;
                                                                      bits = num58;
                                                                      break;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              let num61 = 29;
                                                              let num62 = 29;
                                                              num58 = 29;
                                                              state.mode = 29;
                                                              buf8 = num59;
                                                              buf8 = num60;
                                                              buf8 = tmp6;
                                                              tmp50 = buf8;
                                                              tmp52 = buf8;
                                                              num55 = buf8;
                                                              num56 = buf8;
                                                              tmp51 = buf8;
                                                              num57 = 1;
                                                            }
                                                          }
                                                        }
                                                        tmp50 = buf8;
                                                        tmp52 = buf8;
                                                        num55 = buf8;
                                                        num56 = buf8;
                                                        tmp51 = tmp6;
                                                        num57 = buf8;
                                                        if (0 !== avail_out) {
                                                          buf8 = tmp6 - avail_out;
                                                          let offset5 = state.offset;
                                                          buf8 = offset5;
                                                          buf8 = offset5;
                                                          if (offset5 > buf8) {
                                                            let offset4 = state.offset;
                                                            buf8 = offset4;
                                                            buf8 = offset4;
                                                            buf8 = offset4 - buf8;
                                                            let whave = state.whave;
                                                            buf8 = whave;
                                                            buf8 = whave;
                                                            if (buf8 > whave) {
                                                              let sane = state.sane;
                                                              buf8 = sane;
                                                              num58 = sane;
                                                              if (sane) {
                                                                state.msg = "invalid distance too far back";
                                                                state.mode = 30;
                                                                next_in = buf8;
                                                                diff2 = buf8;
                                                                hold = buf8;
                                                                bits = buf8;
                                                                tmp7 = buf8;
                                                                let tmp8 = buf8;
                                                                let tmp9 = buf8;
                                                                let tmp10 = buf8;
                                                                let tmp11 = buf8;
                                                                let tmp12 = buf8;
                                                                let tmp13 = buf8;
                                                                tmp14 = buf8;
                                                                num50 = buf8;
                                                                let tmp15 = buf8;
                                                                // continue
                                                              }
                                                            }
                                                            let wnext = state.wnext;
                                                            buf8 = wnext;
                                                            buf8 = wnext;
                                                            if (buf8 > wnext) {
                                                              let wnext3 = state.wnext;
                                                              buf8 = wnext3;
                                                              buf8 = wnext3;
                                                              buf8 = buf8 - wnext3;
                                                              let wsize = state.wsize;
                                                              buf8 = wsize;
                                                              buf8 = wsize;
                                                              buf8 = wsize - buf8;
                                                              let length4 = buf8;
                                                            } else {
                                                              let wnext2 = state.wnext;
                                                              buf8 = wnext2;
                                                              buf8 = wnext2;
                                                              buf8 = wnext2 - buf8;
                                                              length4 = buf8;
                                                            }
                                                            let length5 = state.length;
                                                            buf8 = length5;
                                                            buf8 = length4;
                                                            buf8 = length5;
                                                            if (length4 > length5) {
                                                              length4 = state.length;
                                                            }
                                                            let _window = state.window;
                                                            let length3 = length4;
                                                          } else {
                                                            let offset3 = state.offset;
                                                            buf8 = offset3;
                                                            buf8 = offset3;
                                                            buf8 = next_out - offset3;
                                                            length3 = state.length;
                                                            _window = output;
                                                          }
                                                          buf8 = length3;
                                                          if (length3 > avail_out) {
                                                            length3 = avail_out;
                                                          }
                                                          buf8 = length3;
                                                          buf8 = avail_out - length3;
                                                          let length6 = state.length;
                                                          buf8 = length6;
                                                          buf8 = length6;
                                                          buf8 = length3;
                                                          buf8 = length6 - length3;
                                                          state.length = buf8;
                                                          buf8 = next_out;
                                                          do {
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = _window;
                                                            buf8 = _window[buf8];
                                                            output[buf8] = buf8;
                                                            buf8 = length3;
                                                            buf8 = length3 - 1;
                                                            length3 = buf8;
                                                          } while (buf8);
                                                          let length7 = state.length;
                                                          buf8 = length7;
                                                          next_in = buf8;
                                                          next_out = buf8;
                                                          diff2 = buf8;
                                                          avail_out = buf8;
                                                          hold = buf8;
                                                          bits = buf8;
                                                          tmp7 = buf8;
                                                          buf8 = _window;
                                                          tmp8 = buf8;
                                                          tmp9 = buf8;
                                                          tmp10 = buf8;
                                                          tmp11 = buf8;
                                                          tmp12 = buf8;
                                                          tmp13 = buf8;
                                                          tmp14 = buf8;
                                                          num50 = buf8;
                                                          tmp15 = buf8;
                                                          num58 = length7;
                                                          if (0 !== length7) {
                                                            continue;
                                                          } else {
                                                            state.mode = 21;
                                                            input = tmp16;
                                                            output = tmp17;
                                                            next_in = buf8;
                                                            next_out = buf8;
                                                            diff2 = buf8;
                                                            avail_out = buf8;
                                                            hold = buf8;
                                                            bits = buf8;
                                                            tmp6 = tmp24;
                                                            tmp7 = buf8;
                                                            buf8 = _window;
                                                            tmp8 = buf8;
                                                            tmp9 = buf8;
                                                            tmp10 = buf8;
                                                            tmp11 = buf8;
                                                            tmp12 = buf8;
                                                            tmp13 = buf8;
                                                            tmp14 = buf8;
                                                            num50 = buf8;
                                                            tmp15 = buf8;
                                                            // continue
                                                          }
                                                          continue;
                                                        }
                                                      }
                                                      let extra7 = state.extra;
                                                      buf8 = extra7;
                                                      buf8 = extra7;
                                                      if (extra7) {
                                                        let extra8 = state.extra;
                                                        num58 = buf8;
                                                        buf8 = extra8;
                                                        if (buf8 >= extra8) {
                                                          let offset = state.offset;
                                                          buf8 = offset;
                                                          let extra9 = state.extra;
                                                          buf8 = extra9;
                                                          buf8 = extra9;
                                                          buf8 = 1 << extra9;
                                                          buf8 = buf8 - 1;
                                                          buf8 = buf8 & buf8;
                                                          buf8 = offset;
                                                          buf8 = offset + buf8;
                                                          state.offset = buf8;
                                                          let extra10 = state.extra;
                                                          buf8 = extra10;
                                                          buf8 = extra10;
                                                          buf8 = buf8 >>> extra10;
                                                          let extra11 = state.extra;
                                                          buf8 = extra11;
                                                          buf8 = extra11;
                                                          buf8 = buf8 - extra11;
                                                          let back5 = state.back;
                                                          buf8 = back5;
                                                          let extra12 = state.extra;
                                                          buf8 = extra12;
                                                          buf8 = back5;
                                                          buf8 = extra12;
                                                          buf8 = back5 + extra12;
                                                          state.back = buf8;
                                                          buf8 = extra8;
                                                        } else {
                                                          tmp50 = buf8;
                                                          num55 = buf8;
                                                          num56 = buf8;
                                                          tmp51 = tmp6;
                                                          num57 = buf8;
                                                          tmp52 = buf8;
                                                          while (0 !== buf8) {
                                                            buf8 = buf8 - 1;
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = input[buf8];
                                                            buf8 = buf8 << buf8;
                                                            buf8 = buf8 + buf8;
                                                            buf8 = buf8 + 8;
                                                            num58 = buf8;
                                                            buf8 = extra8;
                                                            break;
                                                          }
                                                        }
                                                      }
                                                      let offset2 = state.offset;
                                                      buf8 = offset2;
                                                      let dmax = state.dmax;
                                                      buf8 = dmax;
                                                      num58 = offset2;
                                                      buf8 = dmax;
                                                      if (offset2 > dmax) {
                                                        state.msg = "invalid distance too far back";
                                                        state.mode = 30;
                                                        next_in = buf8;
                                                        diff2 = buf8;
                                                        hold = buf8;
                                                        bits = buf8;
                                                        tmp7 = buf8;
                                                        tmp8 = buf8;
                                                        tmp9 = buf8;
                                                        tmp10 = buf8;
                                                        tmp11 = buf8;
                                                        tmp12 = buf8;
                                                        tmp13 = buf8;
                                                        tmp14 = buf8;
                                                        num50 = buf8;
                                                        tmp15 = buf8;
                                                        // continue
                                                      } else {
                                                        state.mode = 25;
                                                      }
                                                    }
                                                    buf8 = state.distcode[buf8 & (1 << state.distbits) - 1];
                                                    buf8 = buf8 >>> 16 & 255;
                                                    buf8 = 65535 & buf8;
                                                    buf8 = buf8 >>> 24;
                                                    num58 = buf8;
                                                    if (buf8 <= buf8) {
                                                      buf8 = 240 & buf8;
                                                      num58 = buf8;
                                                      if (!buf8) {
                                                        let distcode2 = state.distcode;
                                                        buf8 = distcode2;
                                                        buf8 = buf8 + buf8;
                                                        buf8 = 1 << buf8;
                                                        buf8 = buf8 - 1;
                                                        buf8 = buf8 & buf8;
                                                        buf8 = buf8 >> buf8;
                                                        buf8 = buf8 + buf8;
                                                        buf8 = distcode2;
                                                        buf8 = distcode2[buf8];
                                                        buf8 = buf8 >>> 16;
                                                        buf8 = buf8 & 255;
                                                        buf8 = 65535 & buf8;
                                                        buf8 = buf8 >>> 24;
                                                        buf8 = buf8 + buf8;
                                                        num58 = buf8;
                                                        if (buf8 <= buf8) {
                                                          buf8 = buf8 >>> buf8;
                                                          buf8 = buf8 - buf8;
                                                          let back4 = state.back;
                                                          buf8 = back4;
                                                          buf8 = back4;
                                                          buf8 = back4 + buf8;
                                                          num58 = buf8;
                                                          state.back = buf8;
                                                        } else {
                                                          tmp50 = buf8;
                                                          num55 = buf8;
                                                          num56 = buf8;
                                                          tmp51 = tmp6;
                                                          num57 = buf8;
                                                          tmp52 = buf8;
                                                          while (0 !== buf8) {
                                                            buf8 = buf8 - 1;
                                                            buf8 = +buf8;
                                                            buf8 = buf8 + 1;
                                                            buf8 = input[buf8];
                                                            buf8 = buf8 << buf8;
                                                            buf8 = buf8 + buf8;
                                                            buf8 = buf8 + 8;
                                                            let distcode3 = state.distcode;
                                                            buf8 = distcode3;
                                                            buf8 = buf8 & buf8;
                                                            buf8 = buf8 >> buf8;
                                                            buf8 = buf8 + buf8;
                                                            buf8 = distcode3;
                                                            buf8 = distcode3[buf8];
                                                            buf8 = buf8 >>> 16;
                                                            buf8 = buf8 & 255;
                                                            buf8 = 65535 & buf8;
                                                            buf8 = buf8 >>> 24;
                                                            buf8 = buf8 + buf8;
                                                            num58 = buf8;
                                                            break;
                                                          }
                                                        }
                                                      }
                                                      buf8 = buf8 >>> buf8;
                                                      buf8 = buf8 - buf8;
                                                      state.back = state.back + buf8;
                                                      if (64 & buf8) {
                                                        state.msg = "invalid distance code";
                                                        state.mode = 30;
                                                        next_in = buf8;
                                                        diff2 = buf8;
                                                        hold = buf8;
                                                        bits = buf8;
                                                        tmp7 = buf8;
                                                        tmp8 = buf8;
                                                        tmp9 = buf8;
                                                        tmp10 = buf8;
                                                        tmp11 = buf8;
                                                        tmp12 = buf8;
                                                        tmp13 = buf8;
                                                        tmp14 = buf8;
                                                        num50 = buf8;
                                                        tmp15 = buf8;
                                                        // continue
                                                      } else {
                                                        state.offset = buf8;
                                                        state.extra = 15 & buf8;
                                                        state.mode = 24;
                                                      }
                                                    } else {
                                                      tmp50 = buf8;
                                                      num55 = buf8;
                                                      num56 = buf8;
                                                      tmp51 = tmp6;
                                                      num57 = buf8;
                                                      tmp52 = buf8;
                                                      while (0 !== buf8) {
                                                        buf8 = buf8 - 1;
                                                        buf8 = +buf8;
                                                        buf8 = buf8 + 1;
                                                        buf8 = buf8 + (input[buf8] << buf8);
                                                        buf8 = buf8 + 8;
                                                        buf8 = state.distcode[buf8 & (1 << state.distbits) - 1];
                                                        buf8 = buf8 >>> 16 & 255;
                                                        buf8 = 65535 & buf8;
                                                        buf8 = buf8 >>> 24;
                                                        num58 = buf8;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                  let extra = state.extra;
                                                  buf8 = extra;
                                                  buf8 = extra;
                                                  if (extra) {
                                                    let extra2 = state.extra;
                                                    num58 = buf8;
                                                    buf8 = extra2;
                                                    if (buf8 >= extra2) {
                                                      let length = state.length;
                                                      buf8 = length;
                                                      let extra3 = state.extra;
                                                      buf8 = extra3;
                                                      buf8 = extra3;
                                                      buf8 = 1 << extra3;
                                                      buf8 = buf8 - 1;
                                                      buf8 = buf8 & buf8;
                                                      buf8 = length;
                                                      buf8 = length + buf8;
                                                      state.length = buf8;
                                                      let extra4 = state.extra;
                                                      buf8 = extra4;
                                                      buf8 = extra4;
                                                      buf8 = buf8 >>> extra4;
                                                      let extra5 = state.extra;
                                                      buf8 = extra5;
                                                      buf8 = extra5;
                                                      buf8 = buf8 - extra5;
                                                      let back3 = state.back;
                                                      buf8 = back3;
                                                      let extra6 = state.extra;
                                                      buf8 = extra6;
                                                      buf8 = back3;
                                                      buf8 = extra6;
                                                      buf8 = back3 + extra6;
                                                      state.back = buf8;
                                                      buf8 = extra2;
                                                    } else {
                                                      tmp50 = buf8;
                                                      num55 = buf8;
                                                      num56 = buf8;
                                                      tmp51 = tmp6;
                                                      num57 = buf8;
                                                      tmp52 = buf8;
                                                      while (0 !== buf8) {
                                                        buf8 = buf8 - 1;
                                                        buf8 = +buf8;
                                                        buf8 = buf8 + 1;
                                                        buf8 = input[buf8];
                                                        buf8 = buf8 << buf8;
                                                        buf8 = buf8 + buf8;
                                                        buf8 = buf8 + 8;
                                                        num58 = buf8;
                                                        buf8 = extra2;
                                                        break;
                                                      }
                                                    }
                                                  }
                                                  let length2 = state.length;
                                                  buf8 = length2;
                                                  buf8 = length2;
                                                  state.was = length2;
                                                  state.mode = 23;
                                                }
                                                if (buf8 >= 6) {
                                                  if (avail_out >= 258) {
                                                    state.next_out = next_out;
                                                    state.avail_out = avail_out;
                                                    state.next_in = buf8;
                                                    state.avail_in = buf8;
                                                    state.hold = buf8;
                                                    state.bits = buf8;
                                                    buf8 = arg1;
                                                    buf8 = arg6;
                                                    buf8 = num58;
                                                    buf8 = num58;
                                                    buf8 = num58;
                                                    buf8 = num58;
                                                    buf8 = num58;
                                                    buf8 = arg1(arg6[3])(state, tmp6);
                                                    ({ next_out: next_out2, output: output2, avail_out: avail_out2, next_in: next_in2, input: input2, avail_in: avail_in2 } = state);
                                                    ({ hold: hold2, bits: bits3 } = state);
                                                    input = input2;
                                                    output = output2;
                                                    next_in = next_in2;
                                                    next_out = next_out2;
                                                    diff2 = avail_in2;
                                                    avail_out = avail_out2;
                                                    hold = hold2;
                                                    bits = bits3;
                                                    tmp7 = buf8;
                                                    tmp8 = buf8;
                                                    tmp9 = buf8;
                                                    tmp10 = buf8;
                                                    tmp14 = buf8;
                                                    num50 = buf8;
                                                    tmp15 = buf8;
                                                    if (state.mode !== 12) {
                                                      continue;
                                                    } else {
                                                      state.back = -1;
                                                      input = input2;
                                                      output = output2;
                                                      next_in = next_in2;
                                                      next_out = next_out2;
                                                      diff2 = avail_in2;
                                                      avail_out = avail_out2;
                                                      hold = hold2;
                                                      bits = bits3;
                                                      tmp6 = tmp24;
                                                      tmp7 = buf8;
                                                      tmp8 = buf8;
                                                      tmp9 = buf8;
                                                      tmp10 = buf8;
                                                      tmp11 = tmp29;
                                                      tmp12 = tmp30;
                                                      tmp13 = tmp31;
                                                      tmp14 = buf8;
                                                      num50 = buf8;
                                                      tmp15 = buf8;
                                                      // continue
                                                    }
                                                    continue;
                                                  }
                                                }
                                                state.back = 0;
                                                buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                buf8 = buf8 >>> 16 & 255;
                                                buf8 = 65535 & buf8;
                                                buf8 = buf8 >>> 24;
                                                num58 = buf8;
                                                if (buf8 <= buf8) {
                                                  buf8 = tmp11;
                                                  buf8 = tmp12;
                                                  buf8 = tmp13;
                                                  if (buf8) {
                                                    buf8 = 240 & buf8;
                                                    buf8 = tmp11;
                                                    buf8 = tmp12;
                                                    buf8 = tmp13;
                                                    if (!buf8) {
                                                      let lencode2 = state.lencode;
                                                      buf8 = lencode2;
                                                      buf8 = buf8 + buf8;
                                                      buf8 = 1 << buf8;
                                                      buf8 = buf8 - 1;
                                                      buf8 = buf8 & buf8;
                                                      buf8 = buf8 >> buf8;
                                                      buf8 = buf8 + buf8;
                                                      buf8 = lencode2;
                                                      buf8 = lencode2[buf8];
                                                      buf8 = buf8 >>> 16;
                                                      buf8 = buf8 & 255;
                                                      buf8 = 65535 & buf8;
                                                      buf8 = buf8 >>> 24;
                                                      buf8 = buf8 + buf8;
                                                      num58 = buf8;
                                                      if (buf8 <= buf8) {
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = buf8 - buf8;
                                                        let back = state.back;
                                                        buf8 = back;
                                                        buf8 = back;
                                                        buf8 = back + buf8;
                                                        state.back = buf8;
                                                      } else {
                                                        tmp50 = buf8;
                                                        num55 = buf8;
                                                        num56 = buf8;
                                                        tmp51 = tmp6;
                                                        num57 = buf8;
                                                        tmp52 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = input[buf8];
                                                          buf8 = buf8 << buf8;
                                                          buf8 = buf8 + buf8;
                                                          buf8 = buf8 + 8;
                                                          let lencode5 = state.lencode;
                                                          buf8 = lencode5;
                                                          buf8 = buf8 & buf8;
                                                          buf8 = buf8 >> buf8;
                                                          buf8 = buf8 + buf8;
                                                          buf8 = lencode5;
                                                          buf8 = lencode5[buf8];
                                                          buf8 = buf8 >>> 16;
                                                          buf8 = buf8 & 255;
                                                          buf8 = 65535 & buf8;
                                                          buf8 = buf8 >>> 24;
                                                          buf8 = buf8 + buf8;
                                                          num58 = buf8;
                                                          break;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  buf8 = buf8 >>> buf8;
                                                  buf8 = buf8 - buf8;
                                                  let back2 = state.back;
                                                  buf8 = back2;
                                                  buf8 = back2;
                                                  buf8 = back2 + buf8;
                                                  num58 = buf8;
                                                  state.back = buf8;
                                                  state.length = buf8;
                                                  if (0 === buf8) {
                                                    state.mode = 26;
                                                    next_in = buf8;
                                                    diff2 = buf8;
                                                    hold = buf8;
                                                    bits = buf8;
                                                    tmp7 = buf8;
                                                    tmp8 = buf8;
                                                    tmp9 = buf8;
                                                    tmp10 = buf8;
                                                    tmp11 = buf8;
                                                    tmp12 = buf8;
                                                    tmp13 = buf8;
                                                    tmp14 = buf8;
                                                    num50 = buf8;
                                                    tmp15 = buf8;
                                                    // continue
                                                  } else {
                                                    buf8 = 32 & buf8;
                                                    num58 = buf8;
                                                    if (buf8) {
                                                      state.back = -1;
                                                      state.mode = 12;
                                                      next_in = buf8;
                                                      diff2 = buf8;
                                                      hold = buf8;
                                                      bits = buf8;
                                                      tmp7 = buf8;
                                                      tmp8 = buf8;
                                                      tmp9 = buf8;
                                                      tmp10 = buf8;
                                                      tmp11 = buf8;
                                                      tmp12 = buf8;
                                                      tmp13 = buf8;
                                                      tmp14 = buf8;
                                                      num50 = buf8;
                                                      tmp15 = buf8;
                                                      // continue
                                                    } else {
                                                      buf8 = 64 & buf8;
                                                      num58 = buf8;
                                                      if (buf8) {
                                                        state.msg = "invalid literal/length code";
                                                        state.mode = 30;
                                                        next_in = buf8;
                                                        diff2 = buf8;
                                                        hold = buf8;
                                                        bits = buf8;
                                                        tmp7 = buf8;
                                                        tmp8 = buf8;
                                                        tmp9 = buf8;
                                                        tmp10 = buf8;
                                                        tmp11 = buf8;
                                                        tmp12 = buf8;
                                                        tmp13 = buf8;
                                                        tmp14 = buf8;
                                                        num50 = buf8;
                                                        tmp15 = buf8;
                                                        // continue
                                                      } else {
                                                        buf8 = 15 & buf8;
                                                        state.extra = buf8;
                                                        state.mode = 22;
                                                      }
                                                    }
                                                    continue;
                                                  }
                                                  continue;
                                                } else {
                                                  tmp50 = buf8;
                                                  num55 = buf8;
                                                  num56 = buf8;
                                                  tmp51 = tmp6;
                                                  num57 = buf8;
                                                  tmp52 = buf8;
                                                  while (0 !== buf8) {
                                                    buf8 = buf8 - 1;
                                                    buf8 = +buf8;
                                                    buf8 = buf8 + 1;
                                                    buf8 = buf8 + (input[buf8] << buf8);
                                                    buf8 = buf8 + 8;
                                                    buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                    buf8 = buf8 >>> 16 & 255;
                                                    buf8 = 65535 & buf8;
                                                    buf8 = buf8 >>> 24;
                                                    num58 = buf8;
                                                    break;
                                                  }
                                                }
                                              }
                                              state.mode = 21;
                                            }
                                            buf8 = tmp7;
                                            buf8 = tmp14;
                                            buf8 = tmp15;
                                            buf8 = tmp7;
                                            buf8 = tmp8;
                                            buf8 = tmp9;
                                            buf8 = tmp10;
                                            buf8 = tmp14;
                                            buf8 = tmp15;
                                            if (state.have >= state.nlen + state.ndist) {
                                              next_in = buf8;
                                              diff2 = buf8;
                                              hold = buf8;
                                              bits = buf8;
                                              tmp7 = buf8;
                                              tmp8 = buf8;
                                              tmp9 = buf8;
                                              tmp10 = buf8;
                                              tmp14 = buf8;
                                              num50 = buf8;
                                              tmp15 = buf8;
                                              if (state.mode === 30) {
                                                continue;
                                              } else {
                                                if (0 === state.lens[256]) {
                                                  state.msg = "invalid code -- missing end-of-block";
                                                  state.mode = 30;
                                                  input = tmp16;
                                                  output = tmp17;
                                                  next_in = buf8;
                                                  next_out = tmp19;
                                                  diff2 = buf8;
                                                  avail_out = tmp21;
                                                  hold = buf8;
                                                  bits = buf8;
                                                  tmp6 = tmp24;
                                                  tmp7 = buf8;
                                                  tmp8 = buf8;
                                                  tmp9 = buf8;
                                                  tmp10 = buf8;
                                                  tmp11 = tmp29;
                                                  tmp12 = tmp30;
                                                  tmp13 = tmp31;
                                                  tmp14 = buf8;
                                                  num50 = buf8;
                                                  tmp15 = buf8;
                                                  // continue
                                                } else {
                                                  state.lenbits = 9;
                                                  let obj = { bits: state.lenbits };
                                                  buf8 = arg1;
                                                  buf8 = arg1;
                                                  buf8 = arg6;
                                                  buf8 = arg1;
                                                  buf8 = arg1;
                                                  buf8 = arg1;
                                                  buf8 = arg1(arg6[1]);
                                                  let lens7 = state.lens;
                                                  buf8 = lens7;
                                                  let nlen4 = state.nlen;
                                                  buf8 = nlen4;
                                                  let lencode4 = state.lencode;
                                                  buf8 = lencode4;
                                                  let work3 = state.work;
                                                  buf8 = work3;
                                                  num = 1;
                                                  num = 0;
                                                  num = 0;
                                                  num = 0;
                                                  num = 0;
                                                  buf8 = obj;
                                                  num58 = buf8;
                                                  buf8 = buf8(1, lens7, 0, nlen4, lencode4, 0, work3, obj);
                                                  state.lenbits = obj.bits;
                                                  if (buf8) {
                                                    state.msg = "invalid literal/lengths set";
                                                    state.mode = 30;
                                                    input = tmp16;
                                                    output = tmp17;
                                                    next_in = buf8;
                                                    next_out = tmp19;
                                                    diff2 = buf8;
                                                    avail_out = tmp21;
                                                    hold = buf8;
                                                    bits = buf8;
                                                    tmp6 = tmp24;
                                                    tmp7 = buf8;
                                                    tmp8 = buf8;
                                                    tmp9 = buf8;
                                                    tmp10 = buf8;
                                                    tmp11 = tmp29;
                                                    tmp12 = tmp30;
                                                    tmp13 = tmp31;
                                                    tmp14 = buf8;
                                                    num50 = buf8;
                                                    tmp15 = buf8;
                                                    // continue
                                                  } else {
                                                    state.distbits = 6;
                                                    state.distcode = state.distdyn;
                                                    obj = {};
                                                    buf8 = obj;
                                                    buf8 = obj;
                                                    obj.bits = state.distbits;
                                                    buf8 = arg1;
                                                    buf8 = arg1;
                                                    buf8 = arg6;
                                                    buf8 = arg1;
                                                    buf8 = arg1;
                                                    buf8 = arg1;
                                                    buf8 = arg1(arg6[1]);
                                                    let lens5 = state.lens;
                                                    buf8 = lens5;
                                                    let nlen3 = state.nlen;
                                                    buf8 = nlen3;
                                                    let ndist2 = state.ndist;
                                                    buf8 = ndist2;
                                                    let distcode = state.distcode;
                                                    buf8 = distcode;
                                                    let work2 = state.work;
                                                    buf8 = work2;
                                                    let num72 = 2;
                                                    let num73 = 0;
                                                    let num74 = 0;
                                                    buf8 = obj;
                                                    buf8 = buf8(2, lens5, nlen3, ndist2, distcode, 0, work2, obj);
                                                    buf8 = obj;
                                                    let bits2 = obj.bits;
                                                    buf8 = bits2;
                                                    num58 = bits2;
                                                    state.distbits = bits2;
                                                    if (buf8) {
                                                      state.msg = "invalid distances set";
                                                      state.mode = 30;
                                                      input = tmp16;
                                                      output = tmp17;
                                                      next_in = buf8;
                                                      next_out = tmp19;
                                                      diff2 = buf8;
                                                      avail_out = tmp21;
                                                      hold = buf8;
                                                      bits = buf8;
                                                      tmp6 = tmp24;
                                                      tmp7 = buf8;
                                                      tmp8 = buf8;
                                                      tmp9 = buf8;
                                                      tmp10 = buf8;
                                                      tmp11 = tmp29;
                                                      tmp12 = tmp30;
                                                      tmp13 = tmp31;
                                                      tmp14 = buf8;
                                                      num50 = buf8;
                                                      tmp15 = buf8;
                                                      // continue
                                                    } else {
                                                      state.mode = 20;
                                                      tmp50 = buf8;
                                                      tmp52 = buf8;
                                                      num55 = buf8;
                                                      num56 = buf8;
                                                      tmp51 = tmp24;
                                                      num57 = buf8;
                                                    }
                                                  }
                                                  continue;
                                                }
                                                continue;
                                              }
                                              continue;
                                            } else {
                                              while (true) {
                                                buf8 = state.lencode[buf8 & (1 << state.lenbits) - 1];
                                                buf8 = buf8 >>> 16 & 255;
                                                buf8 = 65535 & buf8;
                                                buf8 = buf8 >>> 24;
                                                num58 = buf8;
                                                if (buf8 <= buf8) {
                                                  if (buf8 < 16) {
                                                    buf8 = buf8 >>> buf8;
                                                    buf8 = buf8 - buf8;
                                                    let lens4 = state.lens;
                                                    buf8 = lens4;
                                                    let have5 = state.have;
                                                    buf8 = have5;
                                                    buf8 = have5;
                                                    buf8 = +have5;
                                                    buf8 = buf8 + 1;
                                                    state.have = buf8;
                                                    buf8 = lens4;
                                                    lens4[buf8] = buf8;
                                                    let nlen2 = state.nlen;
                                                    buf8 = nlen2;
                                                    num58 = nlen2;
                                                  } else {
                                                    if (16 === buf8) {
                                                      buf8 = buf8 + 2;
                                                      num58 = buf8;
                                                      if (buf8 >= buf8) {
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = buf8 - buf8;
                                                        let have2 = state.have;
                                                        buf8 = have2;
                                                        num58 = have2;
                                                        if (0 === have2) {
                                                          state.msg = "invalid bit length repeat";
                                                          state.mode = 30;
                                                        } else {
                                                          let lens6 = state.lens;
                                                          buf8 = lens6;
                                                          let have6 = state.have;
                                                          buf8 = have6;
                                                          buf8 = have6;
                                                          buf8 = have6 - 1;
                                                          buf8 = lens6;
                                                          let num70 = lens6[buf8];
                                                          buf8 = 3 & buf8;
                                                          buf8 = 3 + buf8;
                                                          buf8 = buf8 >>> 2;
                                                          buf8 = buf8 - 2;
                                                        }
                                                      } else {
                                                        tmp50 = buf8;
                                                        num55 = buf8;
                                                        num56 = buf8;
                                                        tmp51 = tmp6;
                                                        num57 = buf8;
                                                        tmp52 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = input[buf8];
                                                          buf8 = buf8 << buf8;
                                                          buf8 = buf8 + buf8;
                                                          buf8 = buf8 + 8;
                                                          num58 = buf8;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    } else if (17 === buf8) {
                                                      buf8 = buf8 + 3;
                                                      num58 = buf8;
                                                      if (buf8 >= buf8) {
                                                        buf8 = buf8 - buf8;
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = 7 & buf8;
                                                        buf8 = 3 + buf8;
                                                        buf8 = buf8 >>> 3;
                                                        buf8 = buf8 - 3;
                                                        let num71 = 0;
                                                        num70 = 0;
                                                      } else {
                                                        tmp50 = buf8;
                                                        num55 = buf8;
                                                        num56 = buf8;
                                                        tmp51 = tmp6;
                                                        num57 = buf8;
                                                        tmp52 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = input[buf8];
                                                          buf8 = buf8 << buf8;
                                                          buf8 = buf8 + buf8;
                                                          buf8 = buf8 + 8;
                                                          num58 = buf8;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    } else {
                                                      buf8 = buf8 + 7;
                                                      num58 = buf8;
                                                      if (buf8 >= buf8) {
                                                        buf8 = buf8 - buf8;
                                                        buf8 = buf8 >>> buf8;
                                                        buf8 = 127 & buf8;
                                                        buf8 = 11 + buf8;
                                                        buf8 = buf8 >>> 7;
                                                        buf8 = buf8 - 7;
                                                        let num69 = 0;
                                                        num70 = 0;
                                                      } else {
                                                        tmp50 = buf8;
                                                        num55 = buf8;
                                                        num56 = buf8;
                                                        tmp51 = tmp6;
                                                        num57 = buf8;
                                                        tmp52 = buf8;
                                                        while (0 !== buf8) {
                                                          buf8 = buf8 - 1;
                                                          buf8 = +buf8;
                                                          buf8 = buf8 + 1;
                                                          buf8 = input[buf8];
                                                          buf8 = buf8 << buf8;
                                                          buf8 = buf8 + buf8;
                                                          buf8 = buf8 + 8;
                                                          num58 = buf8;
                                                          break;
                                                        }
                                                      }
                                                      break;
                                                    }
                                                    let have3 = state.have;
                                                    buf8 = have3;
                                                    buf8 = have3;
                                                    buf8 = have3 + buf8;
                                                    let nlen = state.nlen;
                                                    buf8 = nlen;
                                                    let ndist = state.ndist;
                                                    buf8 = ndist;
                                                    buf8 = nlen;
                                                    buf8 = ndist;
                                                    buf8 = nlen + ndist;
                                                    num58 = buf8;
                                                    if (buf8 > buf8) {
                                                      state.msg = "invalid bit length repeat";
                                                      state.mode = 30;
                                                      buf8 = num70;
                                                    } else {
                                                      buf8 = buf8 - 1;
                                                      buf8 = num70;
                                                      for (let buf8 = buf8; buf8; buf8 = buf8) {
                                                        let lens3 = state.lens;
                                                        buf8 = lens3;
                                                        let have4 = state.have;
                                                        buf8 = have4;
                                                        buf8 = have4;
                                                        buf8 = +have4;
                                                        buf8 = buf8 + 1;
                                                        state.have = buf8;
                                                        buf8 = num70;
                                                        buf8 = lens3;
                                                        lens3[buf8] = num70;
                                                        buf8 = +buf8;
                                                        buf8 = buf8 - 1;
                                                        buf8 = num70;
                                                      }
                                                    }
                                                  }
                                                  break;
                                                } else {
                                                  tmp50 = buf8;
                                                  num55 = buf8;
                                                  num56 = buf8;
                                                  tmp51 = tmp6;
                                                  num57 = buf8;
                                                  tmp52 = buf8;
                                                  while (0 !== buf8) {
                                                    buf8 = buf8 - 1;
                                                    buf8 = +buf8;
                                                    buf8 = buf8 + 1;
                                                    buf8 = input[buf8];
                                                    buf8 = buf8 << buf8;
                                                    buf8 = buf8 + buf8;
                                                    buf8 = buf8 + 8;
                                                    let lencode3 = state.lencode;
                                                    buf8 = lencode3;
                                                    let lenbits = state.lenbits;
                                                    buf8 = lenbits;
                                                    buf8 = lenbits;
                                                    buf8 = 1 << lenbits;
                                                    buf8 = buf8 - 1;
                                                    buf8 = buf8 & buf8;
                                                    buf8 = lencode3;
                                                    buf8 = lencode3[buf8];
                                                    buf8 = buf8 >>> 16;
                                                    buf8 = buf8 & 255;
                                                    buf8 = 65535 & buf8;
                                                    buf8 = buf8 >>> 24;
                                                    num58 = buf8;
                                                    continue;
                                                  }
                                                }
                                                break;
                                              }
                                            }
                                          }
                                          if (state.have < state.ncode) {
                                            while (true) {
                                              if (buf8 >= 3) {
                                                let lens = state.lens;
                                                buf8 = lens;
                                                buf8 = +state.have;
                                                state.have = buf8 + 1;
                                                num58 = lens;
                                                lens[items[buf8]] = 7 & buf8;
                                                buf8 = buf8 >>> 3;
                                                buf8 = buf8 - 3;
                                                break;
                                              } else {
                                                tmp50 = buf8;
                                                num55 = buf8;
                                                num56 = buf8;
                                                tmp51 = tmp6;
                                                num57 = num50;
                                                tmp52 = buf8;
                                                while (0 !== buf8) {
                                                  buf8 = buf8 - 1;
                                                  buf8 = +buf8;
                                                  buf8 = buf8 + 1;
                                                  buf8 = input[buf8];
                                                  buf8 = buf8 << buf8;
                                                  num58 = buf8;
                                                  buf8 = buf8 + buf8;
                                                  buf8 = buf8 + 8;
                                                  continue;
                                                }
                                              }
                                              break;
                                            }
                                          }
                                          if (state.have < 19) {
                                            do {
                                              buf8 = +state.have;
                                              state.have = buf8 + 1;
                                              state.lens[items[buf8]] = 0;
                                              let have = state.have;
                                            } while (have < 19);
                                          }
                                          state.lencode = state.lendyn;
                                          state.lenbits = 7;
                                          obj = { bits: state.lenbits };
                                          buf8 = arg1;
                                          buf8 = arg6;
                                          buf8 = num58;
                                          buf8 = num58;
                                          let lens2 = state.lens;
                                          buf8 = lens2;
                                          let lencode = state.lencode;
                                          buf8 = lencode;
                                          let work = state.work;
                                          buf8 = work;
                                          let num63 = 0;
                                          let num64 = 0;
                                          let num65 = 0;
                                          let num66 = 0;
                                          let num67 = 19;
                                          num58 = 0;
                                          let num68 = 0;
                                          buf8 = obj;
                                          buf8 = arg1(arg6[1])(0, lens2, 0, 19, lencode, 0, work, obj);
                                          state.lenbits = obj.bits;
                                          if (buf8) {
                                            state.msg = "invalid code lengths set";
                                            state.mode = 30;
                                            next_in = buf8;
                                            diff2 = buf8;
                                            hold = buf8;
                                            bits = buf8;
                                            num50 = buf8;
                                            // continue
                                          } else {
                                            state.have = 0;
                                            state.mode = 19;
                                          }
                                        }
                                      }
                                      let length8 = state.length;
                                      if (length8) {
                                        if (length8 > buf8) {
                                          length8 = buf8;
                                        }
                                        if (length8 > avail_out) {
                                          length8 = avail_out;
                                        }
                                        tmp50 = buf8;
                                        tmp52 = buf8;
                                        num55 = buf8;
                                        num56 = buf8;
                                        tmp51 = tmp6;
                                        num57 = num50;
                                        if (0 !== length8) {
                                          buf8 = arg1;
                                          buf8 = arg6;
                                          buf8 = num58;
                                          buf8 = num58;
                                          let obj5 = arg1(arg6[0]);
                                          buf8 = obj5;
                                          buf8 = output;
                                          buf8 = input;
                                          buf8 = length8;
                                          buf8 = next_out;
                                          buf8 = obj5.arraySet(tmp17, tmp16, buf8, length8, tmp19);
                                          diff2 = buf8 - length8;
                                          next_in = buf8 + length8;
                                          avail_out = avail_out - length8;
                                          next_out = next_out + length8;
                                          state.length = state.length - length8;
                                          hold = buf8;
                                          bits = buf8;
                                          tmp7 = length8;
                                          // continue
                                        }
                                      } else {
                                        state.mode = 12;
                                        next_in = buf8;
                                        diff2 = buf8;
                                        hold = buf8;
                                        bits = buf8;
                                        tmp7 = length8;
                                        // continue
                                      }
                                      continue;
                                    }
                                    state.mode = 16;
                                    buf8 = num;
                                    buf8 = num;
                                  }
                                }
                                if (state.last) {
                                  hold = buf8 >>> (7 & buf8);
                                  bits = buf8 - (7 & buf8);
                                  state.mode = 27;
                                  next_in = buf8;
                                  diff2 = buf8;
                                  // continue
                                } else {
                                  next_in = buf8;
                                  diff2 = buf8;
                                  if (buf8 >= 3) {
                                    state.last = 1 & buf8;
                                    buf8 = buf8 - 1;
                                    buf8 = buf8 >>> 1;
                                    buf8 = 3 & buf8;
                                    if (0 === buf8) {
                                      state.mode = 14;
                                    } else if (1 === buf8) {
                                      buf8 = fixedtables;
                                      buf8 = num58;
                                      buf8 = num58;
                                      buf8 = fixedtables(state);
                                      state.mode = 20;
                                      if (6 === arg1) {
                                        num55 = buf8 >>> 2;
                                        num56 = buf8 - 2;
                                        tmp50 = next_in;
                                        tmp52 = diff2;
                                        tmp51 = tmp6;
                                        num57 = num50;
                                      }
                                    } else if (2 === buf8) {
                                      state.mode = 17;
                                    } else if (3 === buf8) {
                                      state.msg = "invalid block type";
                                      state.mode = 30;
                                    }
                                    hold = buf8 >>> 2;
                                    bits = buf8 - 2;
                                    // continue
                                  } else {
                                    tmp50 = buf8;
                                    num55 = buf8;
                                    num56 = buf8;
                                    tmp51 = tmp6;
                                    num57 = num50;
                                    tmp52 = buf8;
                                    while (0 !== buf8) {
                                      buf8 = buf8 - 1;
                                      buf8 = +buf8;
                                      buf8 = buf8 + 1;
                                      buf8 = buf8 + (input[buf8] << buf8);
                                      buf8 = buf8 + 8;
                                      next_in = buf8;
                                      diff2 = buf8;
                                      break;
                                    }
                                  }
                                }
                              }
                              tmp50 = buf8;
                              tmp52 = buf8;
                              num55 = buf8;
                              num56 = buf8;
                              tmp51 = tmp6;
                              num57 = num50;
                              if (5 !== arg1) {
                                tmp50 = buf8;
                                tmp52 = buf8;
                                num55 = buf8;
                                num56 = buf8;
                                tmp51 = tmp6;
                                num57 = num50;
                              }
                            }
                            if (0 === state.havedict) {
                              state.next_out = next_out;
                              state.avail_out = avail_out;
                              state.next_in = buf8;
                              state.avail_in = buf8;
                              state.hold = num75;
                              state.bits = num76;
                              return 2;
                            } else {
                              state.check = 1;
                              state.adler = 1;
                              state.mode = 12;
                              buf8 = num75;
                              buf8 = num76;
                            }
                          }
                        }
                      }
                    }
                    if (2048 & state.flags) {
                      let num93 = 0;
                      tmp50 = buf8;
                      num55 = buf8;
                      num56 = buf8;
                      tmp51 = tmp6;
                      num57 = num50;
                      tmp52 = buf8;
                      if (0 !== buf8) {
                        while (true) {
                          buf8 = +num93;
                          buf8 = buf8 + 1;
                          buf8 = input[buf8 + buf8];
                          buf8 = state.head && buf8 && state.length < 65536;
                          if (buf8) {
                            let head = state.head;
                            let _String = String;
                            buf8 = num58;
                            buf8 = num58;
                            head.name = head.name + String.fromCharCode(buf8);
                          }
                          if (!buf8) {
                            break;
                          } else {
                            num93 = buf8;
                            if (buf8 >= buf8) {
                              break;
                            }
                          }
                        }
                        if (512 & state.flags) {
                          buf8 = arg1;
                          buf8 = arg6;
                          buf8 = num58;
                          buf8 = num58;
                          let check9 = state.check;
                          buf8 = check9;
                          buf8 = input;
                          state.check = arg1(arg6[2])(check9, tmp16, buf8, buf8);
                        }
                        buf8 = buf8 - buf8;
                        buf8 = buf8 + buf8;
                        tmp50 = buf8;
                        tmp52 = buf8;
                        num55 = buf8;
                        num56 = buf8;
                        tmp51 = tmp6;
                        num57 = num50;
                      }
                    } else if (state.head) {
                      state.head.name = null;
                    }
                    state.length = 0;
                    state.mode = 8;
                  }
                }
                if (1024 & state.flags) {
                  buf8 = num87;
                  buf8 = num88;
                  if (num88 < 16) {
                    tmp50 = buf8;
                    num55 = buf8;
                    num56 = buf8;
                    tmp51 = tmp6;
                    num57 = num50;
                    tmp52 = buf8;
                    while (0 !== buf8) {
                      buf8 = buf8 - 1;
                      buf8 = +buf8;
                      buf8 = buf8 + 1;
                      num88 = input[buf8] << buf8;
                      buf8 = buf8 + num88;
                      buf8 = buf8 + 8;
                      num87 = buf8;
                      continue;
                    }
                  }
                  state.length = num87;
                  if (state.head) {
                    state.head.extra_len = num87;
                  }
                  let num89 = 0;
                  let num90 = 0;
                  if (512 & state.flags) {
                    buf8[0] = 255 & num87;
                    buf8[1] = num87 >>> 8 & 255;
                    buf8 = arg1;
                    buf8 = arg6;
                    buf8 = num58;
                    buf8 = num58;
                    let check7 = state.check;
                    buf8 = check7;
                    let num91 = 2;
                    num58 = 0;
                    let num92 = 0;
                    num87 = arg1(arg6[2])(check7, tmp2, 2, 0);
                    state.check = num87;
                    num89 = 0;
                    num90 = 0;
                  }
                } else {
                  num89 = num87;
                  num90 = num88;
                  if (state.head) {
                    state.head.extra = null;
                    num89 = num87;
                    num90 = num88;
                  }
                }
                state.mode = 6;
                buf8 = num89;
                buf8 = num90;
              }
              buf8 = num83;
              buf8 = num83;
              if (num84 >= 16) {
                if (state.head) {
                  state.head.xflags = 255 & buf8;
                  state.head.os = buf8 >> 8;
                }
                if (512 & state.flags) {
                  buf8[0] = 255 & buf8;
                  buf8[1] = buf8 >>> 8 & 255;
                  buf8 = arg1;
                  buf8 = arg6;
                  buf8 = num58;
                  buf8 = num58;
                  let check6 = state.check;
                  buf8 = check6;
                  let num85 = 2;
                  num58 = 0;
                  let num86 = 0;
                  state.check = arg1(arg6[2])(check6, tmp2, 2, 0);
                }
                state.mode = 5;
                num87 = 0;
                num88 = 0;
              } else {
                tmp50 = buf8;
                num55 = buf8;
                num56 = num84;
                tmp51 = tmp6;
                num57 = num50;
                tmp52 = buf8;
                while (0 !== buf8) {
                  buf8 = buf8 - 1;
                  buf8 = +buf8;
                  buf8 = buf8 + 1;
                  buf8 = buf8 + (input[buf8] << num84);
                  num84 = num84 + 8;
                  break;
                }
              }
            }
            buf8 = num79;
            buf8 = num79;
            if (num80 >= 32) {
              if (state.head) {
                state.head.time = buf8;
              }
              if (512 & state.flags) {
                buf8[0] = 255 & buf8;
                buf8[1] = buf8 >>> 8 & 255;
                buf8[2] = buf8 >>> 16 & 255;
                buf8[3] = buf8 >>> 24 & 255;
                buf8 = arg1;
                buf8 = arg6;
                buf8 = num58;
                buf8 = num58;
                let check5 = state.check;
                buf8 = check5;
                let num81 = 4;
                num58 = 0;
                let num82 = 0;
                state.check = arg1(arg6[2])(check5, tmp2, 4, 0);
              }
              state.mode = 4;
              num83 = 0;
              num84 = 0;
            } else {
              tmp50 = buf8;
              num55 = buf8;
              num56 = num80;
              tmp51 = tmp6;
              num57 = num50;
              tmp52 = buf8;
              while (0 !== buf8) {
                buf8 = buf8 - 1;
                buf8 = +buf8;
                buf8 = buf8 + 1;
                buf8 = buf8 + (input[buf8] << num80);
                num80 = num80 + 8;
                break;
              }
            }
          }
          state.next_out = next_out;
          state.avail_out = avail_out;
          state.next_in = tmp50;
          state.avail_in = tmp52;
          state.hold = num55;
          state.bits = num56;
          if (state.wsize) {
            buf8 = updatewindow;
            let output3 = state.output;
            buf8 = output3;
            let next_out3 = state.next_out;
            buf8 = next_out3;
            buf8 = tmp51 - state.avail_out;
            buf8 = state;
            buf8 = updatewindow(state, output3, next_out3, buf8);
          }
          buf8 = avail_in - state.avail_in;
          buf8 = tmp51 - state.avail_out;
          state.total_in = state.total_in + buf8;
          state.total_out = state.total_out + buf8;
          state.total = state.total + buf8;
          buf8 = state.wrap && buf8;
          if (!buf8) {
            let num98 = 0;
            if (state.last) {
              num98 = 64;
            }
            let num99 = 0;
            buf8 = state.bits + num98;
            if (state.mode === 12) {
              num99 = 128;
            }
            if (20 === state.mode) {
              num = 256;
            } else {
              num = 0;
            }
            state.data_type = buf8 + num99 + num;
            buf8 = (0 === buf8 && 0 === buf8 || 4 === arg1) && 0 === num57;
            if (buf8) {
              num57 = -5;
            }
            return num57;
          } else {
            buf8 = arg1;
            let next_out4 = arg6;
            if (state.flags) {
              buf8 = num58;
              buf8 = num58;
              let check13 = state.check;
              buf8 = check13;
              buf8 = buf8(next_out4[2]);
              next_out4 = state.next_out;
              buf8 = next_out4 - buf8;
              buf8 = output;
              buf8 = buf8(check13, tmp17, buf8, buf8);
            } else {
              buf8 = num58;
              buf8 = num58;
              let check12 = state.check;
              buf8 = check12;
              buf8 = state.next_out - buf8;
              buf8 = output;
              buf8 = buf8(next_out4[4])(check12, tmp17, buf8, buf8);
            }
            state.check = buf8;
            state.adler = buf8;
          }
        }
        num = 29;
        buf8 = next_in;
        buf8 = diff2;
        buf8 = hold;
        buf8 = bits;
        buf8 = tmp24;
        if (29 !== mode) {
          num57 = -3;
          tmp50 = next_in;
          tmp52 = diff2;
          num55 = hold;
          num56 = bits;
          tmp51 = tmp24;
          if (30 !== mode) {
            if (31 === mode) {
              return -4;
            } else {
              return -2;
            }
          }
        }
      }
    }
  }
  return -2;
};
arg5.inflateEnd = function inflateEnd(state) {
  if (state) {
    if (state.state) {
      state = state.state;
      if (state.window) {
        state.window = null;
      }
      state.state = null;
      return 0;
    }
  }
  return -2;
};
arg5.inflateGetHeader = function inflateGetHeader(strm, header) {
  let num = -2;
  if (strm) {
    num = -2;
    if (strm.state) {
      const state = strm.state;
      num = -2;
      if (2 & state.wrap) {
        state.head = header;
        header.done = false;
        num = 0;
      }
    }
  }
  return num;
};
arg5.inflateSetDictionary = function inflateSetDictionary(state, output3) {
  let num = -2;
  let num2 = -2;
  if (state) {
    num2 = num;
    if (state.state) {
      state = state.state;
      if (0 === state.wrap) {
        if (11 !== state.mode) {
          updatewindow(state, output3, length, length);
          state.havedict = 1;
          let num9 = 0;
        } else {
          num9 = -3;
        }
        num = num9;
      }
      num2 = num;
    }
  }
  return num2;
};
arg5.inflateInfo = "pako inflate (from Nodeca project)";
