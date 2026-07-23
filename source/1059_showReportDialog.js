// Module ID: 1059
// Function ID: 11322
// Name: showReportDialog
// Dependencies: [1004, 1048, 794]

// Module 1059 (showReportDialog)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.showReportDialog = function showReportDialog(arg0) {
  let onClose;
  let onLoad;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const _document = onClose(reportDialogClosedMessageHandler[0]).WINDOW.document;
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
          eventId = onClose(reportDialogClosedMessageHandler[2]).lastEventId();
          const obj7 = onClose(reportDialogClosedMessageHandler[2]);
        }
        obj.eventId = eventId;
        const merged = Object.assign({}, first, obj);
        const _document2 = onClose(reportDialogClosedMessageHandler[0]).WINDOW.document;
        const element = <script />;
        element.async = true;
        element.crossOrigin = "anonymous";
        element.src = onClose(reportDialogClosedMessageHandler[2]).getReportDialogEndpoint(dsn, merged);
        ({ onLoad, onClose } = merged);
        if (onLoad) {
          element.onload = onLoad;
        }
        if (onClose) {
          reportDialogClosedMessageHandler = function reportDialogClosedMessageHandler(data) {
            if ("__sentry_reportdialog_closed__" === data.data) {
              onClose();
              const WINDOW = onClose(reportDialogClosedMessageHandler[0]).WINDOW;
              const removed = WINDOW.removeEventListener("message", reportDialogClosedMessageHandler);
            }
          };
          let WINDOW = onClose(reportDialogClosedMessageHandler[0]).WINDOW;
          const listener = WINDOW.addEventListener("message", reportDialogClosedMessageHandler);
        }
        head.appendChild(element);
        const obj8 = onClose(reportDialogClosedMessageHandler[2]);
      } else if (onClose(reportDialogClosedMessageHandler[1]).DEBUG_BUILD) {
        const debug2 = onClose(reportDialogClosedMessageHandler[2]).debug;
        debug2.error("[showReportDialog] DSN not configured");
      }
    } else if (tmp6(tmp7[1]).DEBUG_BUILD) {
      const debug = onClose(reportDialogClosedMessageHandler[2]).debug;
      debug.error("[showReportDialog] Global document not defined");
    }
  }
  first = {};
};
