export const formatNumberToMoney = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");