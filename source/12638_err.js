// Module ID: 12638
// Function ID: 97779
// Name: err
// Dependencies: [12639, 12635, 12640, 12641, 12642]

// Module 12638 (err)
const require = arg1;
const dependencyMap = arg6;
function err(state, arg1) {
  state.msg = require(12639)[arg1];
  return arg1;
}
function rank(last_flush) {
  let num = 0;
  if (last_flush > 4) {
    num = 9;
  }
  return (last_flush << 1) - num;
}
function zero(arg0) {
  let diff = arg0.length - 1;
  if (diff >= 0) {
    do {
      arg0[diff] = 0;
      diff = diff - 1;
    } while (diff >= 0);
  }
}
function flush_pending(strm) {
  const state = strm.state;
  let avail_out = state.pending;
  if (avail_out > strm.avail_out) {
    avail_out = strm.avail_out;
  }
  if (0 !== avail_out) {
    const obj = require(12635) /* _has */;
    obj.arraySet(strm.output, state.pending_buf, state.pending_out, avail_out, strm.next_out);
    strm.next_out = strm.next_out + avail_out;
    state.pending_out = state.pending_out + avail_out;
    strm.total_out = strm.total_out + avail_out;
    strm.avail_out = strm.avail_out - avail_out;
    state.pending = state.pending - avail_out;
    if (0 === state.pending) {
      state.pending_out = 0;
    }
  }
}
function flush_block_only(state, arg1) {
  let num = -1;
  if (state.block_start >= 0) {
    num = state.block_start;
  }
  require(12640) /* zero */._tr_flush_block(state, num, state.strstart - state.block_start, arg1);
  state.block_start = state.strstart;
  flush_pending(state.strm);
}
function put_byte(state, arg1) {
  state.pending = +state.pending + 1;
  state.pending_buf[+state.pending] = arg1;
}
function putShortMSB(state, arg1) {
  state.pending = +state.pending + 1;
  state.pending_buf[+state.pending] = arg1 >>> 8 & 255;
  state.pending = +state.pending + 1;
  state.pending_buf[+state.pending] = 255 & arg1;
}
function longest_match(strstart, arg1) {
  let max_chain_length;
  let nice_match;
  let prev;
  let prev_length;
  let w_mask;
  ({ max_chain_length, strstart, prev_length, nice_match } = strstart);
  let num = 0;
  if (strstart.strstart > strstart.w_size - 262) {
    num = strstart.strstart - (strstart.w_size - 262);
  }
  const _window = strstart.window;
  const sum = strstart.strstart + 258;
  let tmp4 = max_chain_length;
  ({ w_mask, prev } = strstart);
  if (strstart.prev_length >= strstart.good_match) {
    tmp4 = max_chain_length >> 2;
  }
  const diff = sum - 258;
  let tmp6 = arg1;
  let diff2 = tmp4;
  let tmp9 = strstart;
  let tmp10 = prev_length;
  let tmp11 = tmp2;
  let tmp12 = tmp3;
  if (nice_match > strstart.lookahead) {
    nice_match = strstart.lookahead;
    tmp6 = arg1;
    diff2 = tmp4;
    tmp9 = strstart;
    tmp10 = prev_length;
    tmp11 = tmp2;
    tmp12 = tmp3;
  }
  while (true) {
    let tmp13 = tmp7;
    let tmp14 = tmp9;
    let tmp15 = tmp10;
    let tmp16 = tmp11;
    let tmp17 = tmp12;
    if (_window[tmp6 + tmp10] === tmp12) {
      tmp13 = tmp7;
      tmp14 = tmp9;
      tmp15 = tmp10;
      tmp16 = tmp11;
      tmp17 = tmp12;
      if (_window[tmp6 + tmp10 - 1] === tmp11) {
        tmp13 = tmp7;
        tmp14 = tmp9;
        tmp15 = tmp10;
        tmp16 = tmp11;
        tmp17 = tmp12;
        if (_window[tmp6] === _window[tmp9]) {
          let sum1 = tmp6 + 1;
          tmp13 = tmp7;
          tmp14 = tmp9;
          tmp15 = tmp10;
          tmp16 = tmp11;
          tmp17 = tmp12;
          if (_window[sum1] === _window[tmp9 + 1]) {
            let sum2 = tmp9 + 2;
            let sum3 = sum1 + 1;
            let sum4 = sum2 + 1;
            let sum5 = sum3 + 1;
            let tmp20 = sum4;
            while (_window[sum4] === _window[sum5]) {
              let sum6 = sum4 + 1;
              let sum7 = sum5 + 1;
              tmp20 = sum6;
              if (_window[sum6] !== _window[sum7]) {
                break;
              } else {
                let sum8 = sum6 + 1;
                let sum9 = sum7 + 1;
                tmp20 = sum8;
                if (_window[sum8] !== _window[sum9]) {
                  break;
                } else {
                  let sum10 = sum8 + 1;
                  let sum11 = sum9 + 1;
                  tmp20 = sum10;
                  if (_window[sum10] !== _window[sum11]) {
                    break;
                  } else {
                    let sum12 = sum10 + 1;
                    let sum13 = sum11 + 1;
                    tmp20 = sum12;
                    if (_window[sum12] !== _window[sum13]) {
                      break;
                    } else {
                      let sum14 = sum12 + 1;
                      let sum15 = sum13 + 1;
                      tmp20 = sum14;
                      if (_window[sum14] !== _window[sum15]) {
                        break;
                      } else {
                        let sum16 = sum14 + 1;
                        let sum17 = sum15 + 1;
                        tmp20 = sum16;
                        if (_window[sum16] !== _window[sum17]) {
                          break;
                        } else {
                          let sum18 = sum16 + 1;
                          sum3 = sum17 + 1;
                          tmp20 = sum18;
                          if (_window[sum18] !== _window[sum3]) {
                            break;
                          } else {
                            sum2 = sum18;
                            tmp20 = sum18;
                            if (sum18 >= sum) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let diff1 = 258 - (sum - tmp20);
            tmp13 = diff1;
            tmp14 = diff;
            tmp15 = tmp10;
            tmp16 = tmp11;
            tmp17 = tmp12;
            if (diff1 > tmp10) {
              strstart.match_start = tmp6;
              let lookahead = diff1;
              if (diff1 >= nice_match) {
                break;
              } else {
                let sum19 = diff + diff1;
                tmp16 = _window[sum19 - 1];
                tmp17 = _window[sum19];
                tmp13 = diff1;
                tmp14 = diff;
                tmp15 = diff1;
              }
            }
            if (lookahead > strstart.lookahead) {
              lookahead = strstart.lookahead;
            }
            return lookahead;
          }
        }
      }
    }
    tmp6 = prev[tmp6 & w_mask];
    lookahead = tmp15;
    if (tmp6 <= num) {
      break;
    } else {
      diff2 = diff2 - 1;
      tmp7 = tmp13;
      tmp9 = tmp14;
      tmp10 = tmp15;
      tmp11 = tmp16;
      tmp12 = tmp17;
      lookahead = tmp15;
      if (0 == diff2) {
        break;
      }
    }
  }
}
function fill_window(state) {
  let _window;
  let strm;
  const w_size = state.w_size;
  while (true) {
    let diff = state.window_size - state.lookahead - state.strstart;
    let sum = diff;
    if (state.strstart >= w_size + (w_size - 262)) {
      let tmp27 = require;
      let tmp28 = dependencyMap;
      let obj = require(12635) /* _has */;
      let tmp29 = obj;
      let tmp30 = w_size;
      let tmp31 = w_size;
      let num4 = 0;
      let arraySetResult = obj.arraySet(state.window, state.window, w_size, w_size, 0);
      state.match_start = state.match_start - w_size;
      state.strstart = state.strstart - w_size;
      state.block_start = state.block_start - w_size;
      let hash_size = state.hash_size;
      let diff1 = hash_size;
      do {
        hash_size = hash_size - 1;
        let tmp3 = state.head[hash_size];
        let num = 0;
        if (tmp3 >= w_size) {
          num = tmp3 - w_size;
        }
        state.head[hash_size] = num;
        diff1 = diff1 - 1;
        let tmp5 = w_size;
        let diff3 = w_size;
      } while (diff1);
      do {
        let diff2 = tmp5 - 1;
        let tmp8 = state.prev[diff2];
        let num2 = 0;
        if (tmp8 >= w_size) {
          num2 = tmp8 - w_size;
        }
        state.prev[diff2] = num2;
        diff3 = diff3 - 1;
        tmp5 = diff2;
      } while (diff3);
      sum = diff + w_size;
      let tmp9 = diff2;
      let tmp10 = tmp8;
    }
    if (0 === state.strm.avail_in) {
      break;
    } else {
      ({ strm, window: _window } = state);
      let sum1 = state.strstart + state.lookahead;
      let avail_in = strm.avail_in;
      if (avail_in > sum) {
        avail_in = sum;
      }
      let num3 = 0;
      if (0 === avail_in) {
        state.lookahead = state.lookahead;
        if (state.lookahead + state.insert >= 3) {
          let diff4 = state.strstart - state.insert;
          state.ins_h = state.window[diff4];
          state.ins_h = (state.ins_h << state.hash_shift ^ state.window[diff4 + 1]) & state.hash_mask;
          let tmp42 = diff4;
          if (state.insert) {
            state.ins_h = (state.ins_h << state.hash_shift ^ state.window[diff4 + 3 - 1]) & state.hash_mask;
            state.prev[diff4 & state.w_mask] = state.head[state.ins_h];
            state.head[state.ins_h] = diff4;
            let sum2 = diff4 + 1;
            state.insert = state.insert - 1;
            let sum3 = sum2;
            let tmp24 = sum2;
            if (state.lookahead + state.insert >= 3) {
              let tmp25 = sum3;
              while (state.insert) {
                state.ins_h = (state.ins_h << state.hash_shift ^ state.window[sum3 + 3 - 1]) & state.hash_mask;
                state.prev[sum3 & state.w_mask] = state.head[state.ins_h];
                state.head[state.ins_h] = sum3;
                sum3 = sum3 + 1;
                state.insert = state.insert - 1;
                let tmp26 = sum3;
                if (state.lookahead + state.insert < 3) {
                  break;
                }
              }
            }
          }
        }
        if (state.lookahead >= 262) {
          break;
        } else if (0 === state.strm.avail_in) {
          break;
        }
      } else {
        strm.avail_in = strm.avail_in - avail_in;
        let tmp34 = require;
        let tmp35 = dependencyMap;
        let obj2 = require(12635) /* _has */;
        let tmp36 = obj2;
        let tmp37 = _window;
        let tmp38 = avail_in;
        let tmp39 = sum1;
        arraySetResult = obj2.arraySet(_window, strm.input, strm.next_in, avail_in, sum1);
        if (1 === strm.state.wrap) {
          let tmp16 = require;
          let tmp17 = dependencyMap;
          let tmp18 = _window;
          let tmp19 = avail_in;
          let tmp20 = sum1;
          strm.adler = require(12641) /* adler32 */(strm.adler, _window, avail_in, sum1);
        } else if (2 === strm.state.wrap) {
          let tmp11 = require;
          let tmp12 = dependencyMap;
          let tmp13 = _window;
          let tmp14 = avail_in;
          let tmp15 = sum1;
          strm.adler = require(12642)(strm.adler, _window, avail_in, sum1);
        }
        strm.next_in = strm.next_in + avail_in;
        strm.total_in = strm.total_in + avail_in;
        let tmp21 = avail_in;
      }
    }
  }
}
function deflate_fast(lookahead) {
  while (true) {
    if (lookahead.lookahead < 262) {
      let tmp = fill_window;
      let tmp2 = fill_window(lookahead);
      if (lookahead.lookahead < 262) {
        if (0 === arg1) {
          break;
        }
      }
      if (0 === lookahead.lookahead) {
        let num2 = 2;
        if (lookahead.strstart < 2) {
          num2 = lookahead.strstart;
        }
        lookahead.insert = num2;
        let num3 = 4;
        if (4 === arg1) {
          let tmp17 = flush_block_only;
          let flag = true;
          let tmp18 = flush_block_only(lookahead, true);
          if (0 === lookahead.strm.avail_out) {
            num3 = 3;
          }
          let num4 = num3;
        } else {
          num4 = 2;
          if (lookahead.last_lit) {
            let tmp15 = flush_block_only;
            let tmp16 = flush_block_only(lookahead, false);
            num4 = 2;
            if (0 === lookahead.strm.avail_out) {
              num4 = 1;
            }
          }
        }
        return num4;
      }
    }
    let num = 0;
    if (lookahead.lookahead >= 3) {
      lookahead.ins_h = (lookahead.ins_h << lookahead.hash_shift ^ lookahead.window[lookahead.strstart + 3 - 1]) & lookahead.hash_mask;
      let tmp3 = lookahead.head[lookahead.ins_h];
      lookahead.prev[lookahead.strstart & lookahead.w_mask] = tmp3;
      lookahead.head[lookahead.ins_h] = lookahead.strstart;
      num = tmp3;
    }
    let tmp4 = 0 !== num && lookahead.strstart - num <= lookahead.w_size - 262;
    if (tmp4) {
      let tmp5 = longest_match;
      lookahead.match_length = longest_match(lookahead, num);
    }
    if (lookahead.match_length >= 3) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let obj2 = require(12640) /* zero */;
      let _tr_tallyResult = obj2._tr_tally(lookahead, lookahead.strstart - lookahead.match_start, lookahead.match_length - 3);
      lookahead.lookahead = lookahead.lookahead - lookahead.match_length;
      if (lookahead.match_length <= lookahead.max_lazy_match) {
        if (lookahead.lookahead >= 3) {
          lookahead.match_length = lookahead.match_length - 1;
          do {
            lookahead.strstart = lookahead.strstart + 1;
            lookahead.ins_h = (lookahead.ins_h << lookahead.hash_shift ^ lookahead.window[lookahead.strstart + 3 - 1]) & lookahead.hash_mask;
            lookahead.prev[lookahead.strstart & lookahead.w_mask] = lookahead.head[lookahead.ins_h];
            lookahead.head[lookahead.ins_h] = lookahead.strstart;
            diff = lookahead.match_length - 1;
            lookahead.match_length = diff;
          } while (0 != diff);
          lookahead.strstart = lookahead.strstart + 1;
          let _tr_tallyResult1 = _tr_tallyResult;
        }
      }
      lookahead.strstart = lookahead.strstart + lookahead.match_length;
      lookahead.match_length = 0;
      lookahead.ins_h = lookahead.window[lookahead.strstart];
      lookahead.ins_h = (lookahead.ins_h << lookahead.hash_shift ^ lookahead.window[lookahead.strstart + 1]) & lookahead.hash_mask;
      _tr_tallyResult1 = _tr_tallyResult;
    } else {
      let tmp6 = require;
      let tmp7 = dependencyMap;
      let obj = require(12640) /* zero */;
      _tr_tallyResult1 = obj._tr_tally(lookahead, 0, lookahead.window[lookahead.strstart]);
      lookahead.lookahead = lookahead.lookahead - 1;
      lookahead.strstart = lookahead.strstart + 1;
    }
    if (!_tr_tallyResult1) {
      continue;
    } else {
      let tmp13 = flush_block_only;
      let tmp14 = flush_block_only(lookahead, false);
      if (0 !== lookahead.strm.avail_out) {
        continue;
      } else {
        return 1;
      }
    }
    continue;
  }
  return 1;
}
function deflate_slow(lookahead) {
  while (true) {
    if (lookahead.lookahead < 262) {
      let tmp = fill_window;
      let tmp2 = fill_window(lookahead);
      if (lookahead.lookahead < 262) {
        if (0 === arg1) {
          break;
        }
      }
      if (0 === lookahead.lookahead) {
        if (lookahead.match_available) {
          let tmp26 = require;
          let tmp27 = dependencyMap;
          let obj3 = require(12640) /* zero */;
          let _tr_tallyResult = obj3._tr_tally(lookahead, 0, lookahead.window[lookahead.strstart - 1]);
          lookahead.match_available = 0;
        }
        let num2 = 2;
        if (lookahead.strstart < 2) {
          num2 = lookahead.strstart;
        }
        lookahead.insert = num2;
        let num3 = 4;
        if (4 === arg1) {
          let tmp31 = flush_block_only;
          let flag = true;
          let tmp32 = flush_block_only(lookahead, true);
          if (0 === lookahead.strm.avail_out) {
            num3 = 3;
          }
          let num4 = num3;
        } else {
          num4 = 2;
          if (lookahead.last_lit) {
            let tmp29 = flush_block_only;
            let tmp30 = flush_block_only(lookahead, false);
            num4 = 2;
            if (0 === lookahead.strm.avail_out) {
              num4 = 1;
            }
          }
        }
        return num4;
      }
    }
    let num = 0;
    if (lookahead.lookahead >= 3) {
      lookahead.ins_h = (lookahead.ins_h << lookahead.hash_shift ^ lookahead.window[lookahead.strstart + 3 - 1]) & lookahead.hash_mask;
      let tmp3 = lookahead.head[lookahead.ins_h];
      lookahead.prev[lookahead.strstart & lookahead.w_mask] = tmp3;
      lookahead.head[lookahead.ins_h] = lookahead.strstart;
      num = tmp3;
    }
    ({ match_length: lookahead.prev_length, match_start: lookahead.prev_match } = lookahead);
    lookahead.match_length = 2;
    let tmp4 = 0 !== num && lookahead.prev_length < lookahead.max_lazy_match && lookahead.strstart - num <= lookahead.w_size - 262;
    if (tmp4) {
      let tmp5 = longest_match;
      lookahead.match_length = longest_match(lookahead, num);
      let tmp6 = lookahead.match_length <= 5;
      if (tmp6) {
        let tmp7 = 1 === lookahead.strategy;
        if (!tmp7) {
          let tmp8 = 3 === lookahead.match_length && lookahead.strstart - lookahead.match_start > 4096;
          tmp7 = tmp8;
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        lookahead.match_length = 2;
      }
    }
    if (lookahead.prev_length >= 3) {
      if (lookahead.match_length <= lookahead.prev_length) {
        let diff = lookahead.strstart + lookahead.lookahead - 3;
        let tmp16 = require;
        let tmp17 = dependencyMap;
        let obj2 = require(12640) /* zero */;
        let _tr_tallyResult1 = obj2._tr_tally(lookahead, lookahead.strstart - 1 - lookahead.prev_match, lookahead.prev_length - 3);
        lookahead.lookahead = lookahead.lookahead - (lookahead.prev_length - 1);
        lookahead.prev_length = lookahead.prev_length - 2;
        let tmp19 = num;
        do {
          let sum = lookahead.strstart + 1;
          lookahead.strstart = sum;
          if (sum <= diff) {
            lookahead.ins_h = (lookahead.ins_h << lookahead.hash_shift ^ lookahead.window[lookahead.strstart + 3 - 1]) & lookahead.hash_mask;
            let tmp33 = lookahead.head[lookahead.ins_h];
            lookahead.prev[lookahead.strstart & lookahead.w_mask] = tmp33;
            lookahead.head[lookahead.ins_h] = lookahead.strstart;
            let tmp34 = tmp33;
          }
          diff1 = lookahead.prev_length - 1;
          lookahead.prev_length = diff1;
        } while (0 != diff1);
        lookahead.match_available = 0;
        lookahead.match_length = 2;
        lookahead.strstart = lookahead.strstart + 1;
        let tmp35 = diff;
        let tmp36 = _tr_tallyResult1;
        if (!_tr_tallyResult1) {
          continue;
        } else {
          let tmp22 = flush_block_only;
          let tmp23 = flush_block_only(lookahead, false);
          let tmp24 = _tr_tallyResult1;
          let tmp25 = diff;
          if (0 !== lookahead.strm.avail_out) {
            continue;
          } else {
            return 1;
          }
        }
        continue;
      }
    }
    if (lookahead.match_available) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let obj = require(12640) /* zero */;
      let _tr_tallyResult2 = obj._tr_tally(lookahead, 0, lookahead.window[lookahead.strstart - 1]);
      if (_tr_tallyResult2) {
        let tmp12 = flush_block_only;
        let tmp13 = flush_block_only(lookahead, false);
      }
      lookahead.strstart = lookahead.strstart + 1;
      lookahead.lookahead = lookahead.lookahead - 1;
      let tmp14 = _tr_tallyResult2;
      if (0 !== lookahead.strm.avail_out) {
        continue;
      } else {
        return 1;
      }
    } else {
      lookahead.match_available = 1;
      lookahead.strstart = lookahead.strstart + 1;
      lookahead.lookahead = lookahead.lookahead - 1;
      continue;
    }
    continue;
  }
  return 1;
}
class Config {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    this.good_length = arg0;
    this.max_lazy = arg1;
    this.nice_length = arg2;
    this.max_chain = arg3;
    this.func = arg4;
    return;
  }
}
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = 8;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  const buf16 = new require(12635) /* _has */.Buf16(1146);
  this.dyn_ltree = buf16;
  const buf161 = new require(12635) /* _has */.Buf16(122);
  this.dyn_dtree = buf161;
  const buf162 = new require(12635) /* _has */.Buf16(78);
  this.bl_tree = buf162;
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  const buf163 = new require(12635) /* _has */.Buf16(16);
  this.bl_count = buf163;
  const buf164 = new require(12635) /* _has */.Buf16(573);
  this.heap = buf164;
  zero(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  const buf165 = new require(12635) /* _has */.Buf16(573);
  this.depth = buf165;
  zero(this.depth);
  this.l_buf = 0;
  this.lit_bufsize = 0;
  this.last_lit = 0;
  this.d_buf = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
function deflateResetKeep(state) {
  if (state) {
    if (state.state) {
      state.total_out = 0;
      state.total_in = 0;
      state.data_type = 2;
      state = state.state;
      state.pending = 0;
      state.pending_out = 0;
      if (state.wrap < 0) {
        state.wrap = -state.wrap;
      }
      let num4 = 42;
      if (!state.wrap) {
        num4 = 113;
      }
      state.status = num4;
      let num5 = 1;
      if (2 === state.wrap) {
        num5 = 0;
      }
      state.adler = num5;
      state.last_flush = 0;
      require(12640) /* zero */._tr_init(state);
      let num = 0;
      const obj = require(12640) /* zero */;
    }
    return num;
  }
  num = -2;
  err(state, -2);
}
function deflateReset(state) {
  const tmp = deflateResetKeep(state);
  if (0 === tmp) {
    state = state.state;
    state.window_size = 2 * state.w_size;
    zero(state.head);
    state.max_lazy_match = items[state.level].max_lazy;
    state.good_match = items[state.level].good_length;
    state.nice_match = items[state.level].nice_length;
    state.max_chain_length = items[state.level].max_chain;
    state.strstart = 0;
    state.block_start = 0;
    state.lookahead = 0;
    state.insert = 0;
    state.prev_length = 2;
    state.match_length = 2;
    state.match_available = 0;
    state.ins_h = 0;
  }
  return tmp;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  let num = level;
  if (strm) {
    if (-1 === num) {
      num = 6;
    }
    if (windowBits < 0) {
      let num7 = -windowBits;
      let num6 = 0;
    } else {
      num6 = 1;
      num7 = windowBits;
      if (windowBits > 15) {
        num7 = windowBits - 16;
        num6 = 2;
      }
    }
    if (memLevel >= 1) {
      if (memLevel <= 9) {
        if (8 === method) {
          if (num7 >= 8) {
            if (num7 <= 15) {
              if (num >= 0) {
                if (num <= 9) {
                  if (strategy >= 0) {
                    if (strategy <= 4) {
                      if (8 === num7) {
                        num7 = 9;
                      }
                      const prototype = DeflateState.prototype;
                      const tmp4 = new DeflateState();
                      strm.state = tmp4;
                      tmp4.strm = strm;
                      tmp4.wrap = num6;
                      tmp4.gzhead = null;
                      tmp4.w_bits = num7;
                      tmp4.w_size = 1 << tmp4.w_bits;
                      tmp4.w_mask = tmp4.w_size - 1;
                      tmp4.hash_bits = memLevel + 7;
                      tmp4.hash_size = 1 << tmp4.hash_bits;
                      tmp4.hash_mask = tmp4.hash_size - 1;
                      tmp4.hash_shift = ~~(tmp4.hash_bits + 3 - 1) / 3;
                      const Buf8 = require(12635) /* _has */.Buf8;
                      const prototype2 = Buf8.prototype;
                      const buf8 = new Buf8(2 * tmp4.w_size);
                      tmp4.window = buf8;
                      const Buf16 = require(12635) /* _has */.Buf16;
                      const prototype3 = Buf16.prototype;
                      const buf16 = new Buf16(tmp4.hash_size);
                      tmp4.head = buf16;
                      const Buf162 = require(12635) /* _has */.Buf16;
                      const prototype4 = Buf162.prototype;
                      const buf162 = new Buf162(tmp4.w_size);
                      tmp4.prev = buf162;
                      tmp4.lit_bufsize = 1 << memLevel + 6;
                      tmp4.pending_buf_size = 4 * tmp4.lit_bufsize;
                      const Buf82 = require(12635) /* _has */.Buf8;
                      const prototype5 = Buf82.prototype;
                      const buf82 = new Buf82(tmp4.pending_buf_size);
                      tmp4.pending_buf = buf82;
                      tmp4.d_buf = tmp4.lit_bufsize;
                      tmp4.l_buf = 3 * tmp4.lit_bufsize;
                      tmp4.level = num;
                      tmp4.strategy = strategy;
                      tmp4.method = method;
                      return deflateReset(strm);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    err(strm, -2);
    return -2;
  } else {
    return -2;
  }
}
const config = new Config(0, 0, 0, 0, function deflate_stored(pending_buf_size) {
  let num = 65535;
  if (65535 > pending_buf_size.pending_buf_size - 5) {
    num = pending_buf_size.pending_buf_size - 5;
  }
  while (true) {
    let tmp = num;
    if (pending_buf_size.lookahead <= 1) {
      let tmp2 = fill_window;
      let tmp3 = fill_window(pending_buf_size);
      if (0 === pending_buf_size.lookahead) {
        if (0 === arg1) {
          break;
        }
      }
      if (0 === pending_buf_size.lookahead) {
        pending_buf_size.insert = 0;
        let num2 = 4;
        if (4 === arg1) {
          let tmp9 = flush_block_only;
          let flag = true;
          let tmp10 = flush_block_only(pending_buf_size, true);
          if (0 === pending_buf_size.strm.avail_out) {
            num2 = 3;
          }
          let num3 = num2;
        } else {
          num3 = 1;
          if (pending_buf_size.strstart > pending_buf_size.block_start) {
            let tmp7 = flush_block_only;
            let tmp8 = flush_block_only(pending_buf_size, false);
            let avail_out = pending_buf_size.strm.avail_out;
            num3 = 1;
          }
        }
        return num3;
      }
    }
    pending_buf_size.strstart = pending_buf_size.strstart + pending_buf_size.lookahead;
    pending_buf_size.lookahead = 0;
    let sum = pending_buf_size.block_start + num;
    if (0 === pending_buf_size.strstart) {
      pending_buf_size.lookahead = pending_buf_size.strstart - sum;
      pending_buf_size.strstart = sum;
      let tmp5 = flush_block_only;
      let tmp6 = flush_block_only(pending_buf_size, false);
      if (0 === pending_buf_size.strm.avail_out) {
        return 1;
      }
    }
    if (pending_buf_size.strstart - pending_buf_size.block_start < pending_buf_size.w_size - 262) {
      continue;
    } else {
      let tmp11 = flush_block_only;
      let tmp12 = flush_block_only(pending_buf_size, false);
      num = tmp;
      if (0 !== pending_buf_size.strm.avail_out) {
        continue;
      } else {
        return 1;
      }
    }
    continue;
  }
  return 1;
});
const items = [config, , , , , , , , , ];
const config1 = new Config(4, 4, 8, 4, deflate_fast);
items[1] = config1;
const config2 = new Config(4, 5, 16, 8, deflate_fast);
items[2] = config2;
const config3 = new Config(4, 6, 32, 32, deflate_fast);
items[3] = config3;
const config4 = new Config(4, 4, 16, 16, deflate_slow);
items[4] = config4;
const config5 = new Config(8, 16, 32, 32, deflate_slow);
items[5] = config5;
const config6 = new Config(8, 16, 128, 128, deflate_slow);
items[6] = config6;
const config7 = new Config(8, 32, 128, 256, deflate_slow);
items[7] = config7;
const config8 = new Config(32, 128, 258, 1024, deflate_slow);
items[8] = config8;
const config9 = new Config(32, 258, 258, 4096, deflate_slow);
items[9] = config9;
arg5.deflateInit = function deflateInit(strm, level) {
  return deflateInit2(strm, level, 8, 15, 8, 0);
};
arg5.deflateInit2 = deflateInit2;
arg5.deflateReset = deflateReset;
arg5.deflateResetKeep = deflateResetKeep;
arg5.deflateSetHeader = function deflateSetHeader(strm, header) {
  let num = -2;
  let num2 = -2;
  if (strm) {
    num2 = num;
    if (strm.state) {
      if (2 === strm.state.wrap) {
        strm.state.gzhead = header;
        num = 0;
      }
      num2 = num;
    }
  }
  return num2;
};
arg5.deflate = function deflate(state, last_flush) {
  if (state) {
    if (state.state) {
      if (last_flush <= 5) {
        if (last_flush >= 0) {
          state = state.state;
          if (state.output) {
            if (state.input) {
              state.strm = state;
              state.last_flush = last_flush;
              if (42 === state.status) {
                if (2 === state.wrap) {
                  state.adler = 0;
                  put_byte(state, 31);
                  put_byte(state, 139);
                  put_byte(state, 8);
                  if (state.gzhead) {
                    let num25 = 0;
                    if (state.gzhead.text) {
                      num25 = 1;
                    }
                    let num26 = 0;
                    if (state.gzhead.hcrc) {
                      num26 = 2;
                    }
                    let num27 = 0;
                    if (state.gzhead.extra) {
                      num27 = 4;
                    }
                    let num28 = 0;
                    if (state.gzhead.name) {
                      num28 = 8;
                    }
                    let num29 = 0;
                    if (state.gzhead.comment) {
                      num29 = 16;
                    }
                    tmp12(state, num25 + num26 + num27 + num28 + num29);
                    put_byte(state, 255 & state.gzhead.time);
                    put_byte(state, state.gzhead.time >> 8 & 255);
                    put_byte(state, state.gzhead.time >> 16 & 255);
                    put_byte(state, state.gzhead.time >> 24 & 255);
                    let num34 = 2;
                    if (9 !== state.level) {
                      if (state.strategy >= 2) {
                        let num35 = 4;
                      } else {
                        num35 = 0;
                      }
                      num34 = num35;
                    }
                    put_byte(state, num34);
                    put_byte(state, 255 & state.gzhead.os);
                    if (tmp30) {
                      put_byte(state, 255 & state.gzhead.extra.length);
                      put_byte(state, state.gzhead.extra.length >> 8 & 255);
                    }
                    if (state.gzhead.hcrc) {
                      state.adler = require(12642)(state.adler, state.pending_buf, state.pending, 0);
                    }
                    state.gzindex = 0;
                    state.status = 69;
                    const tmp22 = put_byte;
                    tmp30 = state.gzhead.extra && state.gzhead.extra.length;
                  } else {
                    tmp12(state, 0);
                    tmp12(state, 0);
                    tmp12(state, 0);
                    tmp12(state, 0);
                    tmp12(state, 0);
                    let num21 = 2;
                    if (9 !== state.level) {
                      if (state.strategy >= 2) {
                        let num22 = 4;
                      } else {
                        num22 = 0;
                      }
                      num21 = num22;
                    }
                    tmp12(state, num21);
                    put_byte(state, 3);
                    state.status = 113;
                  }
                } else {
                  let num5 = 0;
                  let diff = state.w_bits - 8;
                  if (state.strategy < 2) {
                    num5 = 0;
                    if (state.level >= 2) {
                      let num7 = 1;
                      if (state.level >= 6) {
                        let num8 = 3;
                        if (6 === state.level) {
                          num8 = 2;
                        }
                        num7 = num8;
                      }
                      num5 = num7;
                    }
                  }
                  diff = 8 + (diff << 4) << 8 | num5 << 6;
                  let tmp2 = diff;
                  if (0 !== state.strstart) {
                    tmp2 = diff | 32;
                  }
                  state.status = 113;
                  putShortMSB(state, tmp2 + (31 - tmp2 % 31));
                  if (0 !== state.strstart) {
                    putShortMSB(state, state.adler >>> 16);
                    putShortMSB(state, 65535 & state.adler);
                  }
                  state.adler = 1;
                }
              }
              if (69 === state.status) {
                if (state.gzhead.extra) {
                  const pending = state.pending;
                  let pending2 = pending;
                  if (state.gzindex < (65535 & state.gzhead.extra.length)) {
                    if (state.pending !== state.pending_buf_size) {
                      put_byte(state, 255 & state.gzhead.extra[state.gzindex]);
                      state.gzindex = state.gzindex + 1;
                      pending2 = tmp42;
                      while (state.gzindex < (65535 & state.gzhead.extra.length)) {
                        if (state.pending !== state.pending_buf_size) {
                          continue;
                        } else {
                          let tmp46 = state.gzhead.hcrc && state.pending > tmp45;
                          if (tmp46) {
                            let tmp47 = require;
                            let tmp48 = dependencyMap;
                            let num44 = 4;
                            let tmp49 = tmp45;
                            state.adler = require(12642)(state.adler, state.pending_buf, state.pending - tmp45, tmp45);
                          }
                          let tmp50 = flush_pending;
                          let tmp51 = flush_pending(state);
                          pending2 = state.pending;
                          if (state.pending === state.pending_buf_size) {
                            break;
                          }
                        }
                        continue;
                      }
                    } else {
                      if (tmp36) {
                        state.adler = require(12642)(state.adler, state.pending_buf, state.pending - pending, pending);
                      }
                      flush_pending(state);
                      pending2 = state.pending;
                      tmp36 = state.gzhead.hcrc && state.pending > pending;
                    }
                  }
                  if (tmp52) {
                    state.adler = require(12642)(state.adler, state.pending_buf, state.pending - pending2, pending2);
                  }
                  if (state.gzindex === state.gzhead.extra.length) {
                    state.gzindex = 0;
                    state.status = 73;
                  }
                  tmp52 = state.gzhead.hcrc && state.pending > pending2;
                } else {
                  state.status = 73;
                }
              }
              if (73 === state.status) {
                if (state.gzhead.name) {
                  let pending3 = state.pending;
                  while (true) {
                    let tmp56 = pending3;
                    if (state.pending !== state.pending_buf_size) {
                      let num53 = 0;
                      if (state.gzindex < state.gzhead.name.length) {
                        let name = state.gzhead.name;
                        let tmp63 = +state.gzindex;
                        state.gzindex = tmp63 + 1;
                        num53 = 255 & name.charCodeAt(tmp63);
                      }
                      let tmp64 = put_byte;
                      let tmp65 = put_byte(state, num53);
                      let num52 = num53;
                      pending3 = tmp56;
                      let pending4 = tmp56;
                      if (0 === num53) {
                        break;
                      }
                    } else {
                      let tmp57 = state.gzhead.hcrc && state.pending > pending3;
                      if (tmp57) {
                        let tmp58 = require;
                        let tmp59 = dependencyMap;
                        let tmp60 = pending3;
                        state.adler = require(12642)(state.adler, state.pending_buf, state.pending - pending3, pending3);
                      }
                      let tmp61 = flush_pending;
                      let tmp62 = flush_pending(state);
                      pending4 = state.pending;
                      num52 = 1;
                      if (state.pending === state.pending_buf_size) {
                        break;
                      }
                    }
                    let tmp66 = state.gzhead.hcrc && state.pending > pending4;
                    if (tmp66) {
                      let tmp67 = require;
                      let tmp68 = dependencyMap;
                      let tmp69 = pending4;
                      state.adler = require(12642)(state.adler, state.pending_buf, state.pending - pending4, pending4);
                    }
                    if (0 === num52) {
                      state.gzindex = 0;
                      let num54 = 91;
                      state.status = 91;
                    }
                  }
                } else {
                  state.status = 91;
                }
              }
              if (91 === state.status) {
                if (state.gzhead.comment) {
                  let pending5 = state.pending;
                  while (true) {
                    let tmp70 = pending5;
                    if (state.pending !== state.pending_buf_size) {
                      let num61 = 0;
                      if (state.gzindex < state.gzhead.comment.length) {
                        let comment = state.gzhead.comment;
                        let tmp77 = +state.gzindex;
                        state.gzindex = tmp77 + 1;
                        num61 = 255 & comment.charCodeAt(tmp77);
                      }
                      let tmp78 = put_byte;
                      let tmp79 = put_byte(state, num61);
                      let num60 = num61;
                      pending5 = tmp70;
                      let pending6 = tmp70;
                      if (0 === num61) {
                        break;
                      }
                    } else {
                      let tmp71 = state.gzhead.hcrc && state.pending > pending5;
                      if (tmp71) {
                        let tmp72 = require;
                        let tmp73 = dependencyMap;
                        let tmp74 = pending5;
                        state.adler = require(12642)(state.adler, state.pending_buf, state.pending - pending5, pending5);
                      }
                      let tmp75 = flush_pending;
                      let tmp76 = flush_pending(state);
                      pending6 = state.pending;
                      num60 = 1;
                      if (state.pending === state.pending_buf_size) {
                        break;
                      }
                    }
                    let tmp80 = state.gzhead.hcrc && state.pending > pending6;
                    if (tmp80) {
                      let tmp81 = require;
                      let tmp82 = dependencyMap;
                      let tmp83 = pending6;
                      state.adler = require(12642)(state.adler, state.pending_buf, state.pending - pending6, pending6);
                    }
                    if (0 === num60) {
                      let num62 = 103;
                      state.status = 103;
                    }
                  }
                } else {
                  state.status = 103;
                }
              }
              if (state.status === 103) {
                if (state.gzhead.hcrc) {
                  if (state.pending + 2 > state.pending_buf_size) {
                    flush_pending(state);
                  }
                  if (state.pending + 2 <= state.pending_buf_size) {
                    put_byte(state, 255 & state.adler);
                    put_byte(state, state.adler >> 8 & 255);
                    state.adler = 0;
                    state.status = 113;
                  }
                } else {
                  state.status = 113;
                }
              }
              if (0 !== state.pending) {
                flush_pending(state);
                if (0 === state.avail_out) {
                  state.last_flush = -1;
                  return 0;
                }
              } else if (0 === state.avail_in) {
                if (tmp90 <= rank(state.last_flush)) {
                  if (4 !== last_flush) {
                    err(state, -5);
                    return -5;
                  }
                }
                tmp90 = rank(last_flush);
              }
              if (state.status === 666) {
                if (0 !== state.avail_in) {
                  diff = err;
                  diff = err(state, -5);
                  return -5;
                }
              }
              if (0 === state.avail_in) {
                let num85 = 0;
                if (4 === last_flush) {
                  let num93 = 1;
                  let num94 = 1;
                  if (state.wrap > 0) {
                    if (2 === state.wrap) {
                      diff = put_byte;
                      diff = put_byte(state, 255 & state.adler);
                      diff = put_byte(state, state.adler >> 8 & 255);
                      diff = put_byte(state, state.adler >> 16 & 255);
                      diff = put_byte(state, state.adler >> 24 & 255);
                      diff = put_byte(state, 255 & state.total_in);
                      diff = put_byte(state, state.total_in >> 8 & 255);
                      diff = put_byte(state, state.total_in >> 16 & 255);
                      diff = put_byte(state, state.total_in >> 24 & 255);
                    } else {
                      diff = putShortMSB;
                      diff = putShortMSB(state, state.adler >>> 16);
                      diff = putShortMSB(state, 65535 & state.adler);
                    }
                    diff = flush_pending;
                    diff = flush_pending(state);
                    if (state.wrap > 0) {
                      state.wrap = -state.wrap;
                    }
                    if (0 !== state.pending) {
                      num93 = 0;
                    }
                    num94 = num93;
                  }
                  num85 = num94;
                }
                return num85;
              }
              if (2 === state.strategy) {
                while (true) {
                  if (0 === state.lookahead) {
                    diff = fill_window;
                    diff = fill_window(state);
                    if (0 === state.lookahead) {
                      break;
                    }
                  }
                  state.match_length = 0;
                  diff = require;
                  diff = dependencyMap;
                  let obj4 = require(12640) /* zero */;
                  state.lookahead = state.lookahead - 1;
                  state.strstart = state.strstart + 1;
                  if (!obj4._tr_tally(state, 0, state.window[state.strstart])) {
                    continue;
                  } else {
                    diff = flush_block_only;
                    diff = flush_block_only(state, false);
                    let num77 = 1;
                  }
                  let funcResult = num77;
                }
                num77 = 1;
                if (0 !== last_flush) {
                  state.insert = 0;
                  let num78 = 4;
                  if (4 === last_flush) {
                    diff = flush_block_only;
                    diff = flush_block_only(state, true);
                    if (0 === state.strm.avail_out) {
                      num78 = 3;
                    }
                    let num79 = num78;
                  } else {
                    num79 = 2;
                    if (state.last_lit) {
                      diff = flush_block_only;
                      diff = flush_block_only(state, false);
                      num79 = 2;
                      if (0 === state.strm.avail_out) {
                        num79 = 1;
                      }
                    }
                  }
                  diff = num79;
                }
              } else if (3 === state.strategy) {
                const _window = state.window;
                while (true) {
                  if (state.lookahead <= 258) {
                    diff = fill_window;
                    diff = fill_window(state);
                    if (state.lookahead > 258) {
                      if (0 === state.lookahead) {
                        state.insert = 0;
                        let num75 = 4;
                        if (4 === last_flush) {
                          diff = flush_block_only;
                          let flag2 = true;
                          diff = flush_block_only(state, true);
                          if (0 === state.strm.avail_out) {
                            num75 = 3;
                          }
                          let num76 = num75;
                        } else {
                          num76 = 2;
                          if (state.last_lit) {
                            diff = flush_block_only;
                            diff = flush_block_only(state, false);
                            num76 = 2;
                            if (0 === state.strm.avail_out) {
                              num76 = 1;
                            }
                          }
                        }
                        diff = num76;
                      }
                    } else {
                      let num74 = 1;
                      if (0 === last_flush) {
                        break;
                      }
                    }
                    funcResult = num74;
                  }
                  state.match_length = 0;
                  diff = tmp97;
                  diff = tmp98;
                  diff = tmp99;
                  if (state.lookahead >= 3) {
                    diff = tmp97;
                    diff = tmp98;
                    diff = tmp99;
                    if (state.strstart > 0) {
                      diff = state.strstart - 1;
                      diff = _window[diff];
                      diff = diff + 1;
                      diff = tmp99;
                      if (diff === _window[diff]) {
                        diff = diff + 1;
                        diff = tmp99;
                        if (diff === _window[diff]) {
                          diff = diff + 1;
                          diff = tmp99;
                          if (diff === _window[diff]) {
                            diff = state.strstart + 258;
                            diff = diff + 1;
                            while (diff === _window[diff]) {
                              diff = diff + 1;
                              if (diff !== _window[diff]) {
                                break;
                              } else {
                                diff = diff + 1;
                                if (diff !== _window[diff]) {
                                  break;
                                } else {
                                  diff = diff + 1;
                                  if (diff !== _window[diff]) {
                                    break;
                                  } else {
                                    diff = diff + 1;
                                    if (diff !== _window[diff]) {
                                      break;
                                    } else {
                                      diff = diff + 1;
                                      if (diff !== _window[diff]) {
                                        break;
                                      } else {
                                        diff = diff + 1;
                                        if (diff !== _window[diff]) {
                                          break;
                                        } else {
                                          diff = diff + 1;
                                          if (diff !== _window[diff]) {
                                            break;
                                          } else if (diff >= diff) {
                                            break;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            state.match_length = 258 - (diff - diff);
                            if (state.match_length > state.lookahead) {
                              state.match_length = state.lookahead;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (state.match_length >= 3) {
                    diff = require;
                    diff = dependencyMap;
                    let obj3 = require(12640) /* zero */;
                    diff = obj3._tr_tally(state, 1, state.match_length - 3);
                    state.lookahead = state.lookahead - state.match_length;
                    state.strstart = state.strstart + state.match_length;
                    state.match_length = 0;
                  } else {
                    diff = require;
                    diff = dependencyMap;
                    let obj2 = require(12640) /* zero */;
                    diff = obj2._tr_tally(state, 0, state.window[state.strstart]);
                    state.lookahead = state.lookahead - 1;
                    state.strstart = state.strstart + 1;
                  }
                  tmp97 = diff;
                  tmp98 = diff;
                  tmp99 = diff;
                  if (!diff) {
                    continue;
                  } else {
                    diff = flush_block_only;
                    diff = flush_block_only(state, false);
                    tmp97 = diff;
                    tmp98 = diff;
                    tmp99 = diff;
                    num74 = 1;
                    if (0 === state.strm.avail_out) {
                      break;
                    }
                  }
                  break;
                }
              } else {
                funcResult = items[state.level].func(state, last_flush);
                const obj = items[state.level];
              }
              diff = 3 !== funcResult;
              if (diff) {
                diff = 4 !== funcResult;
              }
              if (!diff) {
                state.status = 666;
              }
              if (1 !== funcResult) {
                if (3 !== funcResult) {
                  if (2 === funcResult) {
                    if (1 === last_flush) {
                      diff = require;
                      diff = dependencyMap;
                      diff = require(12640) /* zero */._tr_align(state);
                      const obj6 = require(12640) /* zero */;
                    } else if (5 !== last_flush) {
                      diff = require;
                      diff = dependencyMap;
                      const obj5 = require(12640) /* zero */;
                      diff = obj5;
                      diff = state;
                      diff = obj5._tr_stored_block(state, 0, 0, false);
                      if (3 === last_flush) {
                        diff = zero;
                        diff = zero(state.head);
                        if (0 === state.lookahead) {
                          state.strstart = 0;
                          state.block_start = 0;
                          state.insert = 0;
                        }
                      }
                    }
                    diff = flush_pending;
                    diff = flush_pending(state);
                    if (0 === state.avail_out) {
                      state.last_flush = -1;
                      return 0;
                    }
                  }
                }
              }
              if (0 === state.avail_out) {
                state.last_flush = -1;
              }
              return 0;
            }
          }
          let num99 = -5;
          diff = err;
          if (0 !== state.avail_out) {
            num99 = -2;
          }
          diff = diff(state, num99);
          return num99;
        }
      }
    }
  }
  if (state) {
    diff = err;
    diff = err(state, -2);
  }
  return -2;
};
arg5.deflateEnd = function deflateEnd(state) {
  let num = -2;
  if (state) {
    num = -2;
    if (state.state) {
      const status = state.state.status;
      if (42 !== status) {
        if (69 !== status) {
          if (73 !== status) {
            if (91 !== status) {
              if (status !== 103) {
                err(state, -2);
                let num10 = -2;
              }
            }
          }
        }
      }
      state.state = null;
      num10 = 0;
      if (status === 113) {
        err(state, -3);
        num10 = -3;
      }
    }
  }
  return num;
};
arg5.deflateSetDictionary = function deflateSetDictionary(strm, dictionary) {
  let avail_in;
  let input;
  let next_in;
  if (strm) {
    if (strm.state) {
      const state = strm.state;
      const wrap = state.wrap;
      if (2 !== wrap) {
        if (1 !== wrap) {
          if (!state.lookahead) {
            if (tmp24) {
              strm.adler = require(12641) /* adler32 */(strm.adler, dictionary, length, 0);
            }
            state.wrap = 0;
            let tmp5 = dictionary;
            let w_size = length;
            if (length >= state.w_size) {
              if (0 === wrap) {
                zero(state.head);
                state.strstart = 0;
                state.block_start = 0;
                state.insert = 0;
              }
              const Buf8 = require(12635) /* _has */.Buf8;
              const prototype = Buf8.prototype;
              const buf8 = new Buf8(state.w_size);
              const obj = require(12635) /* _has */;
              obj.arraySet(buf8, dictionary, length - state.w_size, state.w_size, 0);
              w_size = state.w_size;
              tmp5 = buf8;
            }
            strm.avail_in = w_size;
            strm.next_in = 0;
            strm.input = tmp5;
            ({ avail_in, next_in, input } = strm);
            fill_window(state);
            if (state.lookahead >= 3) {
              let strstart = state.strstart;
              let diff = state.lookahead - 2;
              do {
                do {
                  state.ins_h = (state.ins_h << state.hash_shift ^ state.window[strstart + 3 - 1]) & state.hash_mask;
                  state.prev[strstart & state.w_mask] = state.head[state.ins_h];
                  state.head[state.ins_h] = strstart;
                  let sum = strstart + 1;
                  diff = diff - 1;
                  strstart = sum;
                } while (diff);
                state.strstart = sum;
                state.lookahead = 2;
                let tmp22 = fill_window;
                let tmp23 = fill_window(state);
              } while (state.lookahead >= 3);
            }
            state.strstart = state.strstart + state.lookahead;
            ({ strstart: state.block_start, lookahead: state.insert } = state);
            state.lookahead = 0;
            state.prev_length = 2;
            state.match_length = 2;
            state.match_available = 0;
            strm.next_in = next_in;
            strm.input = input;
            strm.avail_in = avail_in;
            state.wrap = wrap;
            return 0;
          }
        }
      }
      return -2;
    }
  }
  return -2;
};
arg5.deflateInfo = "pako deflate (from Nodeca project)";
