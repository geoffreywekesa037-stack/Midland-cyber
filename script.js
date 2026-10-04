(() => {
  const charges = window.MIDLAND_CYBER_CHARGES || {};
  const grid = document.getElementById("chargesGrid"), select = document.getElementById("serviceSelect");
  const quantity = document.getElementById("quantity"), total = document.getElementById("total"), toast = document.getElementById("toast");
  const promos=["🔥 Ask about today's printing & photocopy discount.","🎓 Student-friendly rates available — ask at Midland Cyber.","⚡ Fast digital services with convenient M-PESA payment.","📄 Save time with our online application assistance."];
  let promoIndex=0;
  const money=n=>new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES",maximumFractionDigits:0}).format(n);
  const showToast=msg=>{toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200);};
  Object.entries(charges).forEach(([key,item])=>{
    const card=document.createElement("article"); card.className="charge-card";
    card.innerHTML='<span class="charge-icon">★</span><h3>'+item.name+'</h3><strong>'+(item.priceLabel||money(item.price))+'</strong><small>per '+item.unit+'</small><button class="mini-btn" data-service="'+key+'">Use service</button>';
    grid.appendChild(card);
    const opt=document.createElement("option"); opt.value=key; opt.textContent=item.name; select.appendChild(opt);
  });
  document.querySelectorAll(".mini-btn").forEach(btn=>btn.addEventListener("click",()=>{select.value=btn.dataset.service;quantity.focus();document.getElementById("charges").scrollIntoView({behavior:"smooth"});}));
  document.getElementById("calculateBtn")?.addEventListener("click",()=>{
    const item=charges[select.value],qty=Math.max(1,Number(quantity.value)||1); if(!item)return;
    total.textContent=item.minPrice?"Estimated total: "+money(item.minPrice*qty)+" – "+money(item.maxPrice*qty):"Estimated total: "+money(item.price*qty);
  });
  document.getElementById("copyTill")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("3079915");showToast("Till number 3079915 copied!")}catch(e){showToast("Till Number: 3079915")}});
  document.getElementById("nextPromo")?.addEventListener("click",()=>{promoIndex=(promoIndex+1)%promos.length;document.getElementById("promoText").textContent=promos[promoIndex];});
  setInterval(()=>{promoIndex=(promoIndex+1)%promos.length;const el=document.getElementById("promoText");if(el)el.textContent=promos[promoIndex]},5000);
})();