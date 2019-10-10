# AutoLoader test

```java
System.out.println("hello");
```

```html
<html>
    <head></head>
    <body>
        <div class="app">

        </div>
        <script>
            let hl = Prism.highlight('System.out.println("hello");',Prism.languages.java,'java')
            let app = document.getElementById('app');
            app.innerHtml = `<pre class="lang-java"><code></code>${hl}</pre>`
        </script>
    </body>

</html>
```