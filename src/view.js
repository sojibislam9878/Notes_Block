import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Notes from './Components/Common/Notes';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-notes-block');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<Notes attributes={attributes}/>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});