# OS-Information
Devuelve informacion del sistema

### Ejemplo de uso
```
var os = require('os-information');
var info = os.info()
console.log(info);
```

### Respuesta

```
{ 
    cpu: 'Intel(R) Core(TM) i5-7267U CPU @ 3.10GHz',
    loadAverage: { 
        oneMin: 2.25732421875,
        fiveMin: 2.25634765625,
        fifteen: 3.04150390625 
    },
    freeMemory: '51 MB',
    freeMemoryPercentaje: 0.01,
    totalMemory: '8 GB',
    hostname: 'HostnameExample',
    uptimeMilisecons: 2101,
    uptime: 'hace 35 minutos',
    ip: '0' 
}
```