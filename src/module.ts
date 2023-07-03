import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  const urlParams = new URL(window.location.toLocaleString()).searchParams;
  const hideMenu = urlParams.get('hide-menu');
  const element = document.getElementsByClassName("css-278jzv");
  if (hideMenu === 'true' && element.length){
    element[0].remove()
  }
});
