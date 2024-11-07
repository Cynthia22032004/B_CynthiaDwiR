let antrian = ['Ray', 'Fiki', 'Fadhilla', 'Farah'];

// Tambahkan pembeli baru "Nabila" ke antrian
antrian.push('Nabila');

// Tambahkan dua pembeli lagi "Maza" dan "Elsi" ke antrian
antrian.push('Maza', 'Elsi');

// Antrian terakhir (Elsi) pulang ke rumah (tidak jadi antri), hapus dari akhir antrian
antrian.pop();

// Antrian pertama (Ray) sudah mendapatkan belanjaannya, hapus dari depan antrian
antrian.shift();

// Antrian kedua (Fiki) sudah mendapatkan belanjaannya, hapus dari depan antrian
antrian.shift();

// Tambahkan pembeli baru "Tomi" yang nyerobot antrian (di depan)
antrian.unshift('Tomi');

// Cetak hasil akhir antrian
console.log(antrian);
