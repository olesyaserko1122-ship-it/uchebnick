let pyodideInstance = null;

export async function loadPyodide() {
  if (pyodideInstance) return pyodideInstance;

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
  document.head.appendChild(script);

  await new Promise(resolve => script.onload = resolve);

  pyodideInstance = await window.loadPyodide();
  return pyodideInstance;
}