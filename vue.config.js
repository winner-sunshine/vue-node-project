module.exports = {
    devServer:{
        open: true,
        proxy:{
            '/api':{
                changeOrigin: true,
                target:'http://localhost:8081'
            }
        }
    }
};
