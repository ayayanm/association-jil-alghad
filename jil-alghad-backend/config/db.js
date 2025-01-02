const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Utilisez l'URI depuis les variables d'environnement
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connecté avec succès');
    } catch (error) {
        console.error('Erreur de connexion MongoDB :', error.message);
        process.exit(1); // Arrête l'application en cas d'échec
    }
};

module.exports = connectDB;

