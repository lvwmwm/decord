// Module ID: 19036
// Function ID: 19037
// Name: InterestPickerPerformance
// Dependencies: [2]
// Exports: recordLoadedCover, wasCoverPreviouslyLoaded

// Module 19036 (InterestPickerPerformance)
import size from "module_2" /* 2 */;

const set = new Set();
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerPerformance.tsx");
class InterestCoverLoad {
  constructor(coverURL) {
    let fn = arg1;
    if (arg1 === undefined) {
      fn = function s() {
        return performance.now();
      };
    }
    const merged = Object.assign({ settled: false });
    merged.uri = coverURL;
    merged.now = fn;
    merged.startedAt = fn();
    const hasItem = null != coverURL && set.has(coverURL);
    merged.previouslyLoaded = hasItem;
    return merged;
  }
  start() {
    const self = this;
    if (!this.settled) {
      self.startedAt = self.now();
    }
  }
  finish(outcome) {
    const self = this;
    let tmp = null;
    if (!this.settled) {
      self.settled = true;
      const tmp3 = "loaded" === outcome && null != self.uri;
      if (tmp3) {
        const uri = self.uri;
        if (set.size >= 256) {
          const _delete = obj.delete;
          const iter = set.values();
          _delete(iter.next().value);
        }
        set.add(uri);
      }
      const _Math = Math;
      const _Math2 = Math;
      tmp = { duration_ms: Math.max(0, Math.round(self.now() - self.startedAt)), outcome, previously_loaded: self.previouslyLoaded };
      const obj2 = { duration_ms: Math.max(0, Math.round(self.now() - self.startedAt)), outcome, previously_loaded: self.previouslyLoaded };
    }
    return tmp;
  }
}
class InterestPickerPerformance {
  constructor(emitCover, emitReady, sampled) {
    let fn = arg3;
    if (arg3 === undefined) {
      fn = function h() {
        return performance.now();
      };
    }
    const merged = Object.assign({ outcomes: null, reported: null, rows: null, games: null, viewportHeight: 0, contentTop: null, bottomInset: 0, firstViewport: null, finished: false, disposed: false });
    merged[0] = new Map();
    new Map();
    merged[1] = new Set();
    new Set();
    merged[2] = new Map();
    merged.emitCover = emitCover;
    merged.emitReady = emitReady;
    merged.sampled = sampled;
    merged.now = fn;
    new Map();
    merged.startedAt = fn();
    return merged;
  }
  settle(game_id) {
    const self = this;
    if (!this.disposed) {
      const tmp = !self.finished && self.outcomes.size < 120;
      if (tmp) {
        const outcomes = self.outcomes;
        const result = outcomes.set(game_id.game_id, game_id.outcome);
      }
      let sampled = self.sampled;
      if (sampled) {
        const reported = self.reported;
        sampled = !reported.has(game_id.game_id);
      }
      if (sampled) {
        sampled = self.reported.size < 60;
      }
      if (sampled) {
        const reported2 = self.reported;
        reported2.add(game_id.game_id);
        self.emitCover(game_id);
      }
      self.checkReady();
    }
  }
  setGames(mapped, first1) {
    const self = this;
    const finished = this.finished || null != self.firstViewport;
    if (!finished) {
      self.games = mapped;
      self.bottomInset = first1;
      self.checkReady();
    }
  }
  setViewport(height) {
    this.viewportHeight = height;
    this.checkReady();
  }
  setContentTop(contentTop) {
    this.contentTop = contentTop;
    this.checkReady();
  }
  setRow(arg0, layout) {
    const rows = this.rows;
    const result = rows.set(arg0, layout);
    this.checkReady();
  }
  checkReady() {
    const self = this;
    if (!this.finished) {
      if (null != self.games) {
        if (null != self.contentTop) {
          if (self.viewportHeight > self.bottomInset) {
            if (null == self.firstViewport) {
              const games = self.games;
              if (!games.some((item, index) => {
                const rows = self.rows;
                return !rows.has(index);
              })) {
                let closure_0 = self.viewportHeight - self.bottomInset;
                const games2 = self.games;
                self.firstViewport = games2.flatMap((item, index) => {
                  const rows = self.rows;
                  const value = rows.get(index);
                  const sum = self.contentTop + value.y;
                  if (value.height > 0) {
                    return [];
                  }
                });
              }
            }
            const firstViewport = self.firstViewport;
            if (firstViewport.every((item) => {
              const outcomes = self.outcomes;
              return outcomes.has(item);
            })) {
              self.finish("settled");
            }
          }
        }
      }
    }
  }
  finish(ready_status) {
    const self = this;
    if ("abandoned" === ready_status) {
      self.disposed = true;
    }
    if (!self.finished) {
      self.finished = true;
      let firstViewport = self.firstViewport;
      if (firstViewport == null) {
        firstViewport = [];
      }
      const _Math = Math;
      const _Math2 = Math;
      const emitReady = self.emitReady;
      const obj = {
        duration_ms: Math.max(0, Math.round(self.now() - self.startedAt)),
        ready_status,
        cover_count: firstViewport.length,
        settled_count: firstViewport.filter((item) => {
            const outcomes = self.outcomes;
            return outcomes.has(item);
          }).length
      };
      emitReady(obj);
    }
  }
}
const prototype = InterestPickerPerformance.prototype;

export const COVER_LOAD_SAMPLE_RATE = 0.1;
export const PICKER_READY_TIMEOUT_MS = 15000;
export function wasCoverPreviouslyLoaded(arg0) {
  return set.has(arg0);
}
export function recordLoadedCover(arg0) {
  if (set.size >= 256) {
    const _delete = obj.delete;
    const iter = set.values();
    _delete(iter.next().value);
  }
  set.add(arg0);
}
export { InterestCoverLoad };
export { InterestPickerPerformance };
