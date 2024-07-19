import { createRoot } from 'react-dom/client';
import Content from './Content';

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  if (message.type === 'SHOW') {
    const selection = window.getSelection();
    if (selection !== undefined && selection !== null && selection.toString() !== undefined) {
      const oRange = selection.getRangeAt(0);
      const oRect = oRange.getBoundingClientRect();
      if (selection.toString().length === 0) {
        return;
      }
      if (document.getElementsByTagName('my-extension-root').length > 0) {
        document.getElementsByTagName('my-extension-root')[0].remove();
      }

      const container = document.createElement('my-extension-root');
      document.body.after(container);

      createRoot(container).render(
        <Content
          orect={oRect}
          translatedText={message.data.translatedText.toString()}
          originalText={message.data.originalText.toString()}
          targetLang={message.data.lang.toString()}
        />
      );
    }
  }
});
