import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { CssBaseline } from '@mui/material';
import { CssVarsProvider } from '@mui/material/styles';


createRoot(document.getElementById('root')).render(
	<CssVarsProvider>
		<CssBaseline />
		<App />
	</CssVarsProvider>
)