// Module ID: 18166
// Function ID: 18167
// Name: ICYMIWaterwheelsRow
// Dependencies: [19, 21, 17810, 17815, 2]
// Exports: default

// Module 18166 (ICYMIWaterwheelsRow)
import Fragment from "Fragment" /* 21 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 17810 */;
import WaterwheelsCard from "WaterwheelsCard" /* 17815 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  card = card.card;
  const obj = useWaterwheelsActions;
  let closure_0 = obj.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, {
    card,
    onAction(arg0) {
      return closure_0(arg0);
    }
  });
};
