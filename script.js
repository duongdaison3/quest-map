// ==========================================
// 1. CẤU HÌNH HIỆU ỨNG SAO (PARTICLES.JS)
// ==========================================
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": ["#ffffff", "#00f2fe", "#4facfe"] },
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
            "value": 2.5,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": { "enable": false },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "repel" },
            "resize": true
        },
        "modes": {
            "bubble": { "distance": 200, "size": 6, "duration": 0.3, "opacity": 1, "speed": 3 },
            "repel": { "distance": 200, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

// ==========================================
// 2. CÁC TÍNH NĂNG TƯƠNG TÁC GIAO DIỆN
// ==========================================

// Tính năng cuộn mượt mượt mà
function smoothScroll(event, targetId) {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Tính năng Copy to Clipboard
function copyPrompt(step) {
    let textToCopy = "";

    if (step === 'step1') {
        textToCopy = `"Hãy đóng vai một chuyên gia chiến lược sự nghiệp cấp cao và cố vấn tuyển dụng toàn cầu.
Tôi đang là sinh viên năm [...] chuyên ngành [...].
Qua các bài đánh giá năng lực và phân tích cốt lõi, tôi sở hữu nhóm tính cách [NHẬP VÀO KHUNG TÍNH CÁCH DISC ĐÃ TEST Ở BƯỚC 1] và được định vị thuộc hệ nhân vật sự nghiệp [1 TRONG 4 KÝ TỰ TRONG DISC].
Hiện tại, mục tiêu lớn nhất mà tôi quyết tâm đạt được trong vòng 6-12 tháng tới là [ĐIỀN MỤC TIÊU CỦA BẠN].
Nhiệm vụ của bạn là phân tích các dữ liệu trên để chia nhỏ mục tiêu của tôi thành một lộ trình hành động toàn diện gồm 4 chặng tương ứng với Quý 1, Quý 2, Quý 3, Quý 4. Với mỗi chặng, hãy chỉ rõ đúng 1 nhiệm vụ trọng tâm, thực tế và có tính khả thi cao nhất bằng một câu ngắn gọn dưới 15 chữ;
đồng thời gợi ý cụ thể 1 biểu tượng (icon) nét đơn giản, dễ vẽ tay để tôi có thể tự họa lên bản đồ giấy của mình (ví dụ: nếu nhiệm vụ là tích lũy kiến thức chuyên ngành, hãy gợi ý vẽ icon một cuốn sách mở kèm ngôi sao tỏa sáng).
Cuối cùng, hãy đưa ra một dự báo chuẩn xác về rào cản tâm lý hoặc bẫy trì hoãn lớn nhất mà mô hình tính cách của tôi thường vấp phải trong lộ trình này, kèm theo đúng 1 giải pháp hành động tối giản nhưng mang tính thực thi ngay lập tức vào ngày mai.
Hãy phản hồi với giọng điệu sắc sảo, dứt khoát, uy tín, mang tính định hướng cao và trình bày kết quả theo đúng cấu trúc chuẩn mực sau:
🗺️ QUÝ [1/2/3/4]: [Nhiệm vụ trọng tâm]
🎨 Vật phẩm vẽ tay: [Mô tả chi tiết icon nét đơn giản, dễ vẽ]
👾 RÀO CẢN LỚN NHẤT: [Tên bẫy trì hoãn tâm lý] - [Giải thích ngắn gọn]
🛡️ BÍ KÍP VƯỢT ẢI: [1 hành động nhỏ cụ thể để thực thi ngay lập tức]"`;
    } else if (step === 'step2') {
        textToCopy = `"Với các nhiệm vụ ở trên, hãy gợi ý cho tôi các hình ảnh biểu tượng (icon) nét đơn giản, dễ vẽ bằng bút màu để tôi tự vẽ lên bản đồ giấy của mình."`;
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('✨ Tín hiệu đã truyền tải! Đã sao chép câu lệnh. Hãy dán vào Gemini nhé.');
    }).catch(err => {
        console.error('Lỗi khi copy: ', err);
        alert('Vùng không gian bị nhiễu, vui lòng copy thủ công!');
    });
}

// ==========================================
// 3. LOGIC HIỂN THỊ MODAL PHÓNG TO ẢNH MẪU
// ==========================================
function openModal(imgSrc, captionText) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("modal-caption");
    
    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerHTML = captionText;
}

function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}