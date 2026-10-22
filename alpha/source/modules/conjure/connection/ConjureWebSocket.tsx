// Module ID: 10790
// Function ID: 10791
// Name: ConjureWebSocket
// Dependencies: [2]

// Module 10790 (ConjureWebSocket)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWebSocket.tsx");
class ConjureWebSocket {
  constructor() {
    return Object.assign({ socket: null, supportsPublishOptions: false });
  }
  open(ticket) {
    let closure_1;
    let closure_2;
    let closure_3;
    let obj3;
    let templateId;
    let url;
    const self = this;
    ({ url, templateId, onEvent: closure_1, onClose: closure_2, onError: closure_3 } = ticket);
    let webSocket;
    ticket = ticket.ticket;
    this.close();
    const obj = { ticket, debug: "on_demand" };
    const str = url.replace(/^https:/i, "wss:");
    const replaced = str.replace(/^http:/i, "ws:");
    const _URLSearchParams = URLSearchParams;
    if (null != templateId) {
      obj3 = { template: templateId };
      const obj2 = { template: templateId };
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const _URLSearchParams1 = new _URLSearchParams(obj);
    webSocket = new WebSocket("" + replaced + "/agent/ws?" + _URLSearchParams1);
    this.socket = webSocket;
    const listener = webSocket.addEventListener("message", (event) => {
      if (self.socket === webSocket) {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(event.data);
          if ("hello" === parsed.type) {
            tmp.supportsPublishOptions = true === parsed.publish_options;
          }
          closure_1(parsed);
        } catch (err) {
        }
      }
    });
    const listener1 = webSocket.addEventListener("error", (event) => {
      if (self.socket === webSocket) {
        if (closure_3 != null) {
          tmp(event);
        }
      }
    });
    const listener2 = webSocket.addEventListener("close", () => {
      if (self.socket === webSocket) {
        if (closure_2 != null) {
          tmp();
        }
      }
    });
  }
  sendPublishScheduleMessage(map) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify(map));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendUserMessage(content, nonce, attachment_ids) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj2 = { type: "user_message", content, nonce, attachment_ids, template_id: tmp, remix: tmp2, clarification_answers: tmp3 };
        socket.send(JSON.stringify(obj2));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendUpstreamTicketAck(id, ticket, error) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "upstream_ticket_ack", id, ticket, error };
        socket.send(JSON.stringify(obj));
      }
    }
    error = new Error("WebSocket not open");
    throw error;
  }
  sendRetryRemix() {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify({ type: "retry_remix" }));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendInterrupt() {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify({ type: "interrupt" }));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendQueuedMessageAction(arg0, id) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        const send = socket.send;
        const obj = { type: "" + arg0 + "_queued_message", id };
        send(stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendPublishOptions(combined) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "publish_options", nonce: combined };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("Not connected");
    throw error;
  }
  sendPublish(destination_id) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "publish", destination_id };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendPreparePublish() {
    const self = this;
    let tmp = null != this.socket;
    if (tmp) {
      const _WebSocket = WebSocket;
      tmp = self.socket.readyState === WebSocket.OPEN;
    }
    if (tmp) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "prepare_publish" }));
    }
  }
  sendDraftPatchNotes(combined) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "draft_patch_notes", nonce: combined };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendPatchNotesSent(sent, source_sha) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        let obj;
        const socket = self.socket;
        const obj2 = { type: "patch_notes_sent", published_revision: null, guild_id: null, channel_id: null, message_id: null };
        ({ publishedRevision: obj3.published_revision, guildId: obj3.guild_id, channelId: obj3.channel_id, messageId: obj3.message_id } = sent);
        const send = socket.send;
        const _JSON = JSON;
        if (null != source_sha) {
          obj = { source_sha };
          const obj5 = { source_sha };
        } else {
          obj = {};
        }
        const merged = Object.assign(obj);
        send(stringify(obj2));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendLiveReload(enabled) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "set_live_reload", enabled };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendOverlayBackgroundBlur(enabled) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "set_overlay_background_blur", enabled };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendPrepareTemplate(template_id) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "prepare_template", template_id };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendModelSettings(settings) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "set_model_settings", settings };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendLoadHistory(olderHistoryCursor) {
    const self = this;
    let tmp = null != this.socket;
    if (tmp) {
      const _WebSocket = WebSocket;
      tmp = self.socket.readyState === WebSocket.OPEN;
    }
    if (tmp) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "load_history", cursor: olderHistoryCursor };
      socket.send(JSON.stringify(obj));
    }
  }
  sendDebugSubscribe() {
    const self = this;
    let tmp = null != this.socket;
    if (tmp) {
      const _WebSocket = WebSocket;
      tmp = self.socket.readyState === WebSocket.OPEN;
    }
    if (tmp) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "debug_subscribe" }));
    }
  }
  sendRefreshBrowserSessions() {
    const self = this;
    let tmp = null != this.socket;
    if (tmp) {
      const _WebSocket = WebSocket;
      tmp = self.socket.readyState === WebSocket.OPEN;
    }
    if (tmp) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "refresh_browser_sessions" }));
    }
  }
  sendDebugStatusRequest() {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify({ type: "debug_status_request" }));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendForceCompaction(flag) {
    if (flag === undefined) {
      flag = false;
    }
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const send = socket.send;
        const _JSON = JSON;
        const obj = { type: "force_compaction" };
        const tmp2 = flag ? { settle_pending: true } : {};
        const merged = Object.assign(tmp2);
        send(stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendUndoContextSwitch(id) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "undo_context_switch", id };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendSmartContext(enabled) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "set_smart_context", enabled };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendHostAccess(arg0) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify(arg0));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendRestartSandbox() {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify({ type: "restart_sandbox" }));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendDebugGitInfoRequest(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const send = socket.send;
        const _JSON = JSON;
        const obj = { type: "debug_git_info_request" };
        const tmp2 = flag ? { lite: true } : {};
        const merged = Object.assign(tmp2);
        send(stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendRestartAgent(clear_alarm) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "restart_agent", clear_alarm };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendCaptureAck(id, accepted, code, message) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        try {
          const socket = self.socket;
          const _JSON = JSON;
          const obj = { type: "capture_ack", id, status: accepted, code, message };
          socket.send(JSON.stringify(obj));
        } catch (err) {
        }
      }
    }
  }
  sendControlAck(id, failed, response, message) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        try {
          const socket = self.socket;
          const _JSON = JSON;
          const obj = { type: "control_ack", id, status: failed, response, message };
          socket.send(JSON.stringify(obj));
        } catch (err) {
        }
      }
    }
  }
  close() {
    this.supportsPublishOptions = false;
    const socket = this.socket;
    if (socket != null) {
      socket.close();
    }
    this.socket = null;
  }
}
const prototype = ConjureWebSocket.prototype;

export { ConjureWebSocket };
