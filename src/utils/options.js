import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];

export const notesTypeOptions = [
	{ label: 'Alert', value: 0 },
	{ label: 'Error', value: 1 },
	{ label: 'Info-URL', value: 2 },
	{ label: 'Info-Bookmark', value: 3 },
	{ label: 'Info-Basic', value: 4 },
	{ label: 'Admin Settings', value: 5 },
	{ label: 'Admin Info', value: 6 },
	{ label: 'Admin-Permission', value: 7 },
	{ label: 'Admin Alert', value: 8 },
	{ label: 'File', value: 9 },
	{ label: 'Tip', value: 10 },
]