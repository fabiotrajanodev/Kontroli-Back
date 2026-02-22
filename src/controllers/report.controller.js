import reportRepository from "../repository/report.repository.js";


const reportController = {

    async get() {
        return reportRepository.get();
    },

    async post() {
        const { code, price, quantity, seller, date} = req.body;

        await reportRepository.post( code, price, quantity, seller, date)
    }

}


export default reportController;