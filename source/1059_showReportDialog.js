// Module ID: 1059
// Function ID: 11321
// Name: showReportDialog
// Dependencies: []

// Module 1059 (showReportDialog)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.showReportDialog = function showReportDialog(arg0) {
  let onClose;
  let onLoad;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const _document = arg1(arg6[0]).WINDOW.document;
    let head;
    if (null != _document) {
      head = _document.head;
    }
    if (!head) {
      let body;
      if (null != _document) {
        body = _document.body;
      }
      head = body;
    }
    if (head) {
      let tmp6Result = tmp6(tmp7[2]);
      const currentScope = tmp6Result.getCurrentScope();
      tmp6Result = tmp6(tmp7[2]);
      const client = tmp6Result.getClient();
      let dsn;
      if (null != client) {
        dsn = client.getDsn();
      }
      if (dsn) {
        const obj = {};
        const _Object = Object;
        obj.user = Object.assign({}, currentScope.getUser(), first.user);
        let eventId = first.eventId;
        if (!eventId) {
          eventId = arg1(arg6[2]).lastEventId();
          const obj7 = arg1(arg6[2]);
        }
        obj.eventId = eventId;
        const merged = Object.assign({}, first, obj);
        const _document2 = arg1(arg6[0]).WINDOW.document;
        const element = <script />;
        element.async = true;
        element.crossOrigin = "anonymous";
        element.src = arg1(arg6[2]).getReportDialogEndpoint(dsn, merged);
        ({ onLoad, onClose } = merged);
        const arg1 = onClose;
        if (onLoad) {
          element.onload = onLoad;
        }
        if (onClose) {
          function reportDialogClosedMessageHandler(data) {
            if ("__sentry_reportdialog_closed__" === data.data) {
              onClose();
              const WINDOW = onClose(reportDialogClosedMessageHandler[0]).WINDOW;
              const removed = WINDOW.removeEventListener("message", reportDialogClosedMessageHandler);
            }
          }
          const arg6 = reportDialogClosedMessageHandler;
          const WINDOW = arg1(arg6[0]).WINDOW;
          const listener = WINDOW.addEventListener("message", reportDialogClosedMessageHandler);
        }
        head.appendChild(element);
        const obj8 = arg1(arg6[2]);
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const debug2 = arg1(arg6[2]).debug;
        debug2.error("[showReportDialog] DSN not configured");
      }
    } else if (tmp6(tmp7[1]).DEBUG_BUILD) {
      const debug = arg1(arg6[2]).debug;
      debug.error("[showReportDialog] Global document not defined");
    }
  }
  first = {};
};
