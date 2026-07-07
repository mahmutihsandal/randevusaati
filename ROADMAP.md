# Randevu Saati Website Roadmap

## Hedef

Web sitesini basit ürün tanıtım sayfasından, salon sahiplerine güven veren premium bir satış ve onboarding deneyimine taşımak.

## İçerik Mimarisi

1. Hero
   - Net değer önerisi: müşteri randevuyu kendisi alır, salon akışı kontrol altında kalır.
   - Müşteri uygulamasından güncel ekran görüntüleri kullanılacak.
   - Ana CTA: demo talebi.

2. Müşteri Akışı
   - Salon vitrini
   - Hizmet/personel seçimi
   - Tarih/saat seçimi
   - Randevu onayı
   - Bu bölümde gerçek ekran görüntüsü kullanmak doğru. Kullanıcı ürünü burada görmeli.

3. Admin/İşletme Paneli
   - Güncel admin ekranları gelene kadar gerçek screenshot kullanılmayacak.
   - Yerine premium mock/placeholder paneller kullanılacak.
   - Gösterilecek admin kabiliyetleri:
     - Ana sayfada günlük randevular ve önündeki 1 haftalık yakın tarih randevuları
     - Takvim sayfasında tüm haftayı aynı anda görme
     - Takvimde izin günü, kapalı gün ve saat kapatma yönetimi
     - Muhasebe sayfasında haftalık/aylık randevu sayısı ve kazanç
     - Muhasebe sayfasında personel bazlı kazançlar
     - Profil/ayarlar sayfasında dükkan ayarları, personel ekleme, hizmet ekleme

4. Kurulum ve Geçiş
   - "Siz de Randevu Saati'ne geçin" mesajıyla onboarding akışı anlatılacak.
   - Kurulum videosu için video placeholder alanı eklenecek.
   - Video gelince gerçek poster/video dosyasıyla değiştirilecek.

5. Paketler ve Karar Destek
   - Paketler sade kalacak.
   - Karşılaştırma tablosu satın alma kararına yardım edecek.
   - Fiyatlar daha sonra stratejiye göre değiştirilebilir.

## Görsel Varlık Politikası

- Müşteri tarafı: Güncel ekran görüntüleri kullanılabilir ve kullanılmalı.
- Admin tarafı: Güncel screenshot gelene kadar placeholder/mock UI kullanılacak.
- Kurulum videosu: Şimdilik video alanı boş/placeholder kalacak.
- Yeni ekran görüntüleri geldiğinde hedef klasör:
  - `assets/screens/user-current/`
  - `assets/screens/admin-current/`
  - `assets/video/`

## Bu Aşamada Bilerek Ertelenenler

Geliştirmeyi yavaşlatmamak için aşağıdakiler en sona bırakılacak:

- Browser/Playwright ekran görüntüsü doğrulaması
- Pixel-perfect mobil/desktop QA
- Lighthouse, performans ve erişilebilirlik denetimi
- Görsel asset optimizasyonu
- Deploy ve GitHub Pages kontrolü
- Uzun build/test komutları

## Sıradaki Uygulama Adımları

1. Sayfayı premium ürün anlatımı ve daha güçlü UI bölümleriyle yeniden düzenle.
2. Admin kabiliyetlerini mock dashboard bloklarıyla anlat.
3. Kurulum/video ve geçiş CTA bölümlerini ekle.
4. Güncel admin screenshotları gelince mock blokları gerçek görsellerle değiştir.
5. En sonda hızlı teknik doğrulama ve görsel QA yap.
