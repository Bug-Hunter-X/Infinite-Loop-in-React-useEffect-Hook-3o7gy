```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic, the dependency array is empty, useEffect only runs once after mount
    console.log('useEffect ran');
  }, []);

  return <div>Count: {count}</div>;
}
```