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

### **useEffect**
- ```useEffect``` is a React Hook that lets you synchronize a component with an external system.
- This allows you to perform side effects in your components such as fetching data, directly updating the DOM.
Syntax:-
```
useEffect(setup, dependencies?)
```

### **useRef**
- ```useRef``` is a React Hook that lets you reference a value that’s not needed for rendering.
- It allows us to persist values between renders.
- It can be used to store a mutable value that does not cause a re-render when updated.
Syntax:-
```
const ref = useRef(initialValue)
```