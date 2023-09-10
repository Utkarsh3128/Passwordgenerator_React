## Password Generator
In this project, we will learn about different hooks such as ```useCallback```,   ```useEffect``` & ```useRef```

### **useCallback**
- ```useCallback``` is a React hook that lets you cache a function definition between re-renders. In other words,this hook returns a memoized callback function
- This allows us to isolate resource intensive functions so that they will not automatically run on every render.
- This hook only runs when one of its dependencies update.
Example:-
```
const cachedFn = useCallback(fn, dependencies)
```


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
