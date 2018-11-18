'use strict'

exports.info = () => {
    const os = require('os');
    const osUtils = require('os-utils');
    const moment = require('moment');
    const cpu = os.cpus().length > 0 ? os.cpus()[0].model : '';
    let cpuUsage = '';
    // osUtils.cpuUsage((responseCpuUsage) => {
        // cpuUsage = Number(responseCpuUsage.toFixed(2));
        const freeMemory = bytesToSize(os.freemem());
        const freeMemoryPercentaje = Number(osUtils.freememPercentage().toFixed(2));
        const totalMemory = bytesToSize(os.totalmem());
        const hostname = os.hostname();
        const uptimeMilisecons = os.uptime();
        const unix = moment().unix() - uptimeMilisecons;
        const date = moment(unix * 1000).format('YYYY-MM-DD HH:mm:ss');
        const uptime = moment(date).locale('es').fromNow();
        const loadAverage = {
            oneMin: osUtils.loadavg(1),
            fiveMin: osUtils.loadavg(5),
            fifteen: osUtils.loadavg(15)
        }
        const ip = os.networkInterfaces().eth0 !== undefined ? os.networkInterfaces().eth0[0].address : '0';
        return {
            cpu,
            // cpuUsage,
            loadAverage,
            freeMemory,
            freeMemoryPercentaje,
            totalMemory,
            hostname,
            uptimeMilisecons,
            uptime,
            ip
        }
    // });
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function sum(arr, from, length) {
    var total = 0;
    for (var i = from - length; i < from; i++) {
        total += arr[(i + arr.length) % arr.length];
    }
    return total;
}
