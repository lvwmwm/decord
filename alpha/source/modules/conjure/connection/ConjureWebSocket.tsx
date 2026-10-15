// Module ID: 10980
// Function ID: 10981
// Name: ConjureWebSocket
// Dependencies: [2]

// Module 10980 (ConjureWebSocket)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWebSocket.tsx");
class ConjureWebSocket {
  constructor() {
    return Object.assign({ socket: null });
  }
  open(ticket) {
    let closure_1;
    let closure_2;
    let closure_3;
    let url;
    const self = this;
    ({ url, onEvent: closure_1, onClose: closure_2, onError: closure_3 } = ticket);
    ticket = ticket.ticket;
    this.close();
    const str = url.replace(/^https:/i, "wss:");
    const replaced = str.replace(/^http:/i, "ws:");
    const webSocket = new WebSocket("" + replaced + "/agent/ws?ticket=" + encodeURIComponent(ticket) + "&debug=on_demand");
    this.socket = webSocket;
    const listener = webSocket.addEventListener("message", (event) => {
      if (self.socket === webSocket) {
        try {
          const _JSON = JSON;
          closure_1(JSON.parse(event.data));
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
  sendUserMessage(content, nonce, attachment_ids, project_name) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj2 = { type: "user_message", content, nonce, attachment_ids, project_name, template_id: tmp, remix: tmp2, clarification_answers: tmp3 };
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
  sendPublish() {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        socket.send(JSON.stringify({ type: "publish" }));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendDraftPatchNotes(combined, name) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        let obj3;
        const socket = self.socket;
        const send = socket.send;
        const _JSON = JSON;
        const obj = { type: "draft_patch_notes", nonce: combined };
        if (null != name) {
          obj3 = { project_name: name };
          const obj2 = { project_name: name };
        } else {
          obj3 = {};
        }
        const merged = Object.assign(obj3);
        send(stringify(obj));
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
  sendAppIconAck(attachment_id, applied) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        try {
          const socket = self.socket;
          const _JSON = JSON;
          const obj = { type: "app_icon_ack", id: attachment_id, status: applied };
          socket.send(JSON.stringify(obj));
        } catch (err) {
        }
      }
    }
  }
  close() {
    const socket = this.socket;
    if (socket != null) {
      socket.close();
    }
    this.socket = null;
  }
}
const prototype = ConjureWebSocket.prototype;

export { ConjureWebSocket };
