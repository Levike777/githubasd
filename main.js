import { createLists } from './components/lists.js';
import { createTable } from './components/table.js';
import { createImage } from './components/image.js';

const content = document.getElementById('content');

content.appendChild(createLists());

content.appendChild(createTable());

content.appendChild(createImage());
