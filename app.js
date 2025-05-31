function isimKaydet() {
    const isim = prompt("Adınızı giriniz:");
  
    if (isim && isim.trim() !== "") {
      localStorage.setItem("kullaniciAdi", isim.trim());
    } else {
      alert("Geçerli bir isim girmelisiniz.");
    }
  }
  
  function selamla() {
    const kayitliIsim = localStorage.getItem("kullaniciAdi");
  
    if (kayitliIsim) {
      alert(`Merhaba, ${kayitliIsim}!`);
    } else {
      alert("Henüz kayıtlı bir isim bulunamadı.");
    }
  }
  
  
