import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Fungsi untuk mengambil data user berdasarkan ID-nya dari database
export const getUserById = async (req, res) => {
  try {
    // Mencari user dengan ID yang sesuai di tabel User
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    // Mengembalikan data user yang ditemukan dalam format JSON
    res.status(200).json(response);
  } catch (error) {
    // Menampilkan pesan error jika terjadi kesalahan dalam mencari data user
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  // Ambil data dari permintaan HTTP melalui variabel req.body dan simpan ke variabel body
  let body = req.body;

  // Ambil nilai properti 'account' dari objek 'body' dan simpan ke variabel account
  let account = body.account;

  // Periksa apakah nilai 'account' sama dengan string "admin"
  if (account == true) {
    // Jika benar, ubah nilai properti 'account' pada objek 'req.body' menjadi angka 1
    req.body.account = 1;
  } else {
    // Jika tidak, ubah nilai properti 'account' pada objek 'req.body' menjadi angka 0
    req.body.account = 0;
  }

  try {
    // Membuat data user baru dengan menggunakan objek req.body dan menunggu hingga proses selesai
    await User.create(req.body);

    // Jika proses berhasil, kirimkan status 201 (Created) dan pesan berhasil dalam format JSON
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    // Jika terjadi kesalahan, tampilkan pesan error di konsol
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  // Ambil data dari permintaan HTTP melalui variabel req.body dan simpan ke variabel body
  let body = req.body;

  // Ambil nilai properti 'account' dari objek 'body' dan simpan ke variabel account
  let account = body.account;

  // Periksa apakah nilai 'account' sama dengan string "admin"
  if (account == true) {
    // Jika benar, ubah nilai properti 'account' pada objek 'req.body' menjadi angka 1 atau True
    req.body.account = 1;
  } else {
    // Jika tidak, ubah nilai properti 'account' pada objek 'req.body' menjadi angka 0 atau False
    req.body.account = 0;
  }
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
