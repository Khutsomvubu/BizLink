const state = {
  currentRole: "local_business", // 'supplier' | 'local_business' | 'driver' | 'customer'
  demoStep: 1,
  totalSteps: 15,
  b2bCart: {
    "prod-1": 5, // 5 x Maize Meal
    "prod-2": 2, // 2 x Cooking Oil
    "prod-3": 3, // 3 x Sugar
  },
  products: [
    {
      id: "prod-1",
      name: "5kg Super Maize Meal",
      supplier: "Soshanguve Wholesale Hub",
      businessType: "Wholesale Hub",
      location: "Block TT, Soshanguve North",
      price: 58,
      spazaRetailPrice: 65,
      stock: 450,
      category: "Groceries",
      verified: true,
      badge: "Wholesale Hub",
      icon: "fa-wheat-awn",
    },
    {
      id: "prod-2",
      name: "Cooking Oil 2L (Sunflower)",
      supplier: "Soshanguve Wholesale Hub",
      businessType: "Wholesale Hub",
      location: "Block TT, Soshanguve North",
      price: 46,
      spazaRetailPrice: 52,
      stock: 310,
      category: "Groceries",
      verified: true,
      badge: "Wholesale Hub",
      icon: "fa-bottle-droplet",
    },
    {
      id: "prod-3",
      name: "White Sugar 2.5kg",
      supplier: "Soshanguve Wholesale Hub",
      businessType: "Wholesale Hub",
      location: "Block TT, Soshanguve North",
      price: 38,
      spazaRetailPrice: 45,
      stock: 280,
      category: "Groceries",
      verified: true,
      badge: "Wholesale Hub",
      icon: "fa-cube",
    },
    {
      id: "prod-4",
      name: "Cake Wheat Flour 2.5kg",
      supplier: "Soshanguve Wholesale Hub",
      businessType: "Wholesale Hub",
      location: "Block TT, Soshanguve North",
      price: 34,
      spazaRetailPrice: 42,
      stock: 190,
      category: "Food",
      verified: true,
      badge: "Wholesale Hub",
      icon: "fa-bread-slice",
    },
    {
      id: "prod-5",
      name: "Long Grain Parboiled Rice 5kg",
      supplier: "Soshanguve Wholesale Hub",
      businessType: "Wholesale Hub",
      location: "Block TT, Soshanguve North",
      price: 74,
      spazaRetailPrice: 85,
      stock: 160,
      category: "Groceries",
      verified: true,
      badge: "Wholesale Hub",
      icon: "fa-bowl-rice",
    },
  ],
  orders: [
    {
      id: "BZ101",
      business: "Mama Thandi Spaza",
      location: "Section D, Mamelodi West",
      supplier: "Soshanguve Wholesale Hub",
      items: "5x Maize Meal, 2x Cooking Oil, 3x Sugar",
      subtotal: 496,
      deliveryFee: 35,
      total: 531,
      route: "Route BZ-204",
      status: "Collected", // Pending, Collected, Delivered
      otp: "7392",
    },
    {
      id: "BZ102",
      business: "ABC Tuck Shop",
      location: "Section F, Mamelodi East",
      supplier: "Soshanguve Wholesale Hub",
      items: "4x Maize Meal, 6x Flour",
      subtotal: 480,
      deliveryFee: 35,
      total: 515,
      route: "Route BZ-204",
      status: "Collected",
      otp: "4198",
    },
    {
      id: "BZ103",
      business: "Kasi Bakery",
      location: "Section C, Mamelodi",
      supplier: "Soshanguve Wholesale Hub",
      items: "10x White Bread Flour 10kg",
      subtotal: 1150,
      deliveryFee: 35,
      total: 1185,
      route: "Route BZ-204",
      status: "Collected",
      otp: "9921",
    },
    {
      id: "BZ104",
      business: "Khumalo Grocers",
      location: "Section B, Mamelodi",
      supplier: "Soshanguve Wholesale Hub",
      items: "6x Rice 5kg, 4x Cooking Oil 2L",
      subtotal: 820,
      deliveryFee: 35,
      total: 855,
      route: "Route BZ-204",
      status: "Collected",
      otp: "5563",
    },
  ],
  trackingStage: 4, // 1: Confirmed, 2: Assigned, 3: Picked Up, 4: On Way, 5: Near Dest, 6: Delivered
};

const demoSteps = [
  {
    step: 1,
    role: "local_business",
    subtab: "overview",
    title: "Step 1: Login as Mama Thandi Spaza",
    desc: "Mama Thandi needs essential pantry stock for her township store.",
  },
  {
    step: 2,
    role: "local_business",
    subtab: "order-stock",
    title: "Step 2: Browse Soshanguve Wholesale Hub",
    desc: "Access wholesale tier bulk prices directly from trusted supplier.",
  },
  {
    step: 3,
    role: "local_business",
    subtab: "order-stock",
    title: "Step 3: Add 5x Maize Meal, 2x Oil, 3x Sugar",
    desc: "Cart totals calculated with automatic bulk volume discount.",
  },
  {
    step: 4,
    role: "local_business",
    subtab: "order-stock",
    title: "Step 4: Place B2B Stock Order",
    desc: "Order submitted to the BizLink coordination network.",
  },
  {
    step: 5,
    role: "supplier",
    subtab: null,
    title: "Step 5: Compatible Orders Detected",
    desc: "BizLink identifies 3 other Mamelodi businesses ordering from Soshanguve Hub.",
  },
  {
    step: 6,
    role: "supplier",
    subtab: null,
    title: "Step 6: Created Pooled Route BZ-204",
    desc: "Individual R120 deliveries replaced by R35 pooled fee (R340 total community savings).",
  },
  {
    step: 7,
    role: "driver",
    subtab: null,
    title: "Step 7: Assign Driver Kabelo (Bakkie)",
    desc: "AI Match: Available + 1.2 Ton Hilux + Nearest to Soshanguve Hub.",
  },
  {
    step: 8,
    role: "driver",
    subtab: null,
    title: "Step 8: Driver Dashboard - 4 Deliveries",
    desc: "Kabelo views coordinated 4-stop manifest for Route BZ-204.",
  },
  {
    step: 9,
    role: "driver",
    subtab: null,
    title: "Step 9: Driver Accepts Route",
    desc: "Kabelo accepts route and commits to dispatch timetable.",
  },
  {
    step: 10,
    role: "driver",
    subtab: null,
    title: "Step 10: Mark Packages Collected at Hub",
    desc: "Packages scanned via QR and verified in vehicle.",
  },
  {
    step: 11,
    role: "local_business",
    subtab: "overview",
    title: "Step 11: Live Simulated Tracking Active",
    desc: "Customer and merchant track real-time Bakkie progression.",
  },
  {
    step: 12,
    role: "driver",
    subtab: null,
    title: "Step 12: Driver Reaches Mama Thandi (OTP Request)",
    desc: "Mama Thandi supplies private secure OTP: 7392.",
  },
  {
    step: 13,
    role: "driver",
    subtab: null,
    title: "Step 13: Recipient & Delivery Verified",
    desc: "OTP 7392 matched: eliminates misdelivery across pooled shops!",
  },
  {
    step: 14,
    role: "driver",
    subtab: null,
    title: "Step 14: Digital Proof of Delivery Generated",
    desc: "Cryptographic timestamp + GPS coordinates saved.",
  },
  {
    step: 15,
    role: "local_business",
    subtab: "analytics",
    title: "Step 15: Return to Analytics Dashboard",
    desc: "Inventory updated + 22% delivery cost reduction confirmed!",
  },
];

function switchRole(roleId) {
  state.currentRole = roleId;

  // Update Nav Buttons
  document.querySelectorAll(".role-nav-btn").forEach((btn) => {
    btn.classList.remove("bg-white", "text-bizblue-600", "shadow-sm");
    btn.classList.add("text-slate-600");
  });
  const activeNav = document.getElementById(`nav-btn-${roleId}`);
  if (activeNav) {
    activeNav.classList.add("bg-white", "text-bizblue-600", "shadow-sm");
    activeNav.classList.remove("text-slate-600");
  }

  // Hide all role views
  document
    .querySelectorAll(".role-view")
    .forEach((view) => view.classList.add("hidden"));

  // Show selected role view
  const targetView = document.getElementById(`view-${roleId}`);
  if (targetView) targetView.classList.remove("hidden");

  const liveTrackingSection = document.getElementById("liveTrackingSection");
  if (liveTrackingSection) {
    if (roleId === "customer") {
      liveTrackingSection.classList.remove("hidden");
    } else {
      liveTrackingSection.classList.add("hidden");
    }
  }

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Refresh appropriate views
  if (roleId === "supplier") renderSupplierProducts();
  if (roleId === "local_business") renderMamaOrderHistory();
  if (roleId === "customer") renderMarketplace();
}

function setBusinessSubTab(tabName) {
  const tabs = ["overview", "order-stock", "inventory", "analytics"];
  tabs.forEach((t) => {
    const btn = document.getElementById(`biz-subtab-${t}`);
    const panel = document.getElementById(`biz-panel-${t}`);
    if (btn && panel) {
      if (t === tabName) {
        btn.className =
          "biz-subtab px-3.5 py-1.5 text-xs font-bold rounded-lg bg-bizblue-50 text-bizblue-700 border border-blue-200";
        panel.classList.remove("hidden");
      } else {
        btn.className =
          "biz-subtab px-3.5 py-1.5 text-xs font-bold rounded-lg text-slate-600 hover:bg-slate-100";
        panel.classList.add("hidden");
      }
    }
  });

  if (tabName === "order-stock") renderB2BOrderProducts();
  if (tabName === "inventory") renderSpazaInventory();
}

function renderSupplierProducts() {
  const tbody = document.getElementById("supplierProductTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.products
    .map(
      (p) => `
    <tr class="hover:bg-slate-50/80 transition">
      <td class="px-4 py-3 font-semibold text-slate-900 flex items-center space-x-2">
        <span class="w-7 h-7 rounded-lg bg-blue-50 text-bizblue-600 flex items-center justify-center text-xs">
          <i class="fa-solid ${p.icon}"></i>
        </span>
        <span>${p.name}</span>
      </td>
      <td class="px-4 py-3 text-slate-500">${p.category}</td>
      <td class="px-4 py-3 font-bold text-slate-800">R${p.price}.00</td>
      <td class="px-4 py-3">
        <span class="px-2 py-0.5 rounded-full text-xs font-bold ${p.stock > 50 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}">
          ${p.stock} units
        </span>
      </td>
      <td class="px-4 py-3 text-right">
        <button onclick="showToast('Inventory Updated', 'Added +50 units to stock')" class="text-xs text-bizblue-600 font-bold hover:underline">
          + Quick Restock
        </button>
      </td>
    </tr>
  `,
    )
    .join("");

  document.getElementById("supplier-product-count").innerText =
    `${state.products.length} SKUs`;
}

function renderB2BOrderProducts() {
  const container = document.getElementById("b2bOrderProductList");
  if (!container) return;

  container.innerHTML = state.products
    .slice(0, 3)
    .map((p) => {
      const qty = state.b2bCart[p.id] || 0;
      return `
      <div class="p-4 rounded-2xl border ${qty > 0 ? "border-bizblue-500 bg-blue-50/30" : "border-slate-200 bg-white"} shadow-sm space-y-3 transition">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-2.5">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-bizblue-700 flex items-center justify-center text-sm">
              <i class="fa-solid ${p.icon}"></i>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">${p.name}</h4>
              <span class="text-[11px] text-slate-500">Wholesale: R${p.price}.00 &bull; Stock: ${p.stock}</span>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-between pt-2 border-t border-slate-100">
          <div class="text-xs text-slate-500">
            Subtotal: <strong class="text-slate-800 font-bold">R${(qty * p.price).toFixed(2)}</strong>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="updateCartQty('${p.id}', -1)" class="w-7 h-7 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center">-</button>
            <span class="font-bold text-sm w-6 text-center text-slate-800">${qty}</span>
            <button onclick="updateCartQty('${p.id}', 1)" class="w-7 h-7 rounded-lg bg-bizblue-600 hover:bg-bizblue-700 text-white font-bold text-xs flex items-center justify-center">+</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  calculateB2BTotal();
}

function updateCartQty(prodId, delta) {
  const current = state.b2bCart[prodId] || 0;
  const next = Math.max(0, current + delta);
  state.b2bCart[prodId] = next;
  renderB2BOrderProducts();
}

function calculateB2BTotal() {
  let subtotal = 0;
  Object.keys(state.b2bCart).forEach((id) => {
    const prod = state.products.find((p) => p.id === id);
    if (prod) subtotal += state.b2bCart[id] * prod.price;
  });
  const deliveryFee = 35; // Pooled fee
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);

  document.getElementById("b2bSubtotal").innerText = `R${subtotal.toFixed(2)}`;
  document.getElementById("b2bTotal").innerText = `R${total.toFixed(2)}`;
}

function placeB2BOrder() {
  showToast(
    "Order Dispatched to Pooled Route",
    "Matched with 3 other Mamelodi shops in Route BZ-204!",
  );
  setBusinessSubTab("overview");
  nextDemoStep();
}

function renderMamaOrderHistory() {
  const tbody = document.getElementById("mamaOrderHistory");
  if (!tbody) return;

  tbody.innerHTML = state.orders
    .map(
      (o) => `
    <tr class="hover:bg-slate-50 transition">
      <td class="px-4 py-3 font-mono font-bold text-bizblue-700 text-xs">#${o.id}</td>
      <td class="px-4 py-3 font-semibold text-slate-800">${o.supplier}</td>
      <td class="px-4 py-3 text-slate-600 text-xs">${o.items}</td>
      <td class="px-4 py-3 text-xs font-bold text-purple-700">
        <i class="fa-solid fa-route mr-1"></i> ${o.route}
      </td>
      <td class="px-4 py-3 font-semibold text-slate-900">R${o.deliveryFee} (Pooled)</td>
      <td class="px-4 py-3">
        <span class="px-2 py-0.5 rounded-full text-xs font-bold ${o.status === "Delivered" ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-bizblue-800"}">
          ${o.status}
        </span>
      </td>
      <td class="px-4 py-3">
        <span class="px-2 py-1 rounded-md text-xs font-mono font-bold bg-amber-100 text-slate-900 border border-amber-300">
          OTP: ${o.otp}
        </span>
      </td>
    </tr>
  `,
    )
    .join("");
}

function renderSpazaInventory() {
  const tbody = document.getElementById("spazaInventoryTable");
  if (!tbody) return;

  tbody.innerHTML = state.products
    .map(
      (p) => `
    <tr class="hover:bg-slate-50 transition">
      <td class="px-4 py-3 font-bold text-slate-900 flex items-center space-x-2">
        <i class="fa-solid ${p.icon} text-slate-400"></i>
        <span>${p.name}</span>
      </td>
      <td class="px-4 py-3 text-slate-500">${p.category}</td>
      <td class="px-4 py-3 font-semibold text-slate-900">R${p.spazaRetailPrice}.00</td>
      <td class="px-4 py-3 font-bold text-slate-700">${Math.floor(p.stock / 8)} packs</td>
      <td class="px-4 py-3">
        <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
          In Stock &bull; Active
        </span>
      </td>
    </tr>
  `,
    )
    .join("");
}

let activeCategory = "all";

function setCategoryFilter(cat) {
  activeCategory = cat;
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    btn.classList.remove("bg-white/20", "active");
    btn.classList.add("bg-white/10");
  });
  event.target.classList.add("bg-white/20", "active");
  filterMarketplace();
}

function renderMarketplace() {
  filterMarketplace();
}

function filterMarketplace() {
  const query = (document.getElementById("marketplaceSearchInput")?.value || "")
    .toLowerCase()
    .trim();
  const grid = document.getElementById("marketplaceGrid");
  if (!grid) return;

  // Filter products
  const filtered = state.products.filter((p) => {
    const matchesQuery =
      p.name.toLowerCase().includes(query) ||
      p.supplier.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    const matchesCat =
      activeCategory === "all" || p.category === activeCategory;
    return matchesQuery && matchesCat;
  });

  document.getElementById("marketplaceResultCount").innerText =
    `${filtered.length} products available nearby`;

  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between">
      <div class="space-y-2">
        <div class="flex justify-between items-start">
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-bizblue-700">
            ${p.category}
          </span>
          <span class="text-xs font-bold text-emerald-700 flex items-center">
            <i class="fa-solid fa-circle-check mr-1"></i> Verified
          </span>
        </div>

        <div class="flex items-center space-x-3 py-1">
          <div class="w-12 h-12 rounded-xl bg-slate-100 text-bizblue-600 flex items-center justify-center text-xl shrink-0">
            <i class="fa-solid ${p.icon}"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-900 text-sm leading-snug">${p.name}</h3>
            <p class="text-xs text-slate-500 mt-0.5">${p.supplier}</p>
          </div>
        </div>

        <div class="text-xs text-slate-400">
          <i class="fa-solid fa-location-dot mr-1"></i> ${p.location}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span class="text-[10px] text-slate-400 block uppercase font-semibold">Retail Price</span>
          <span class="text-lg font-extrabold text-slate-900">R${p.spazaRetailPrice}.00</span>
        </div>
        <button onclick="showToast('Added to Cart', '${p.name} added to your township bag!')" class="px-3 py-2 bg-bizblue-600 hover:bg-bizblue-700 text-white text-xs font-bold rounded-xl transition shadow-sm">
          <i class="fa-solid fa-bag-shopping mr-1"></i> Buy Local
        </button>
      </div>
    </div>
  `,
    )
    .join("");
}

function driverAcceptRoute() {
  document.getElementById("driverRouteStatusBadge").className =
    "text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md";
  document.getElementById("driverRouteStatusBadge").innerText =
    "Route Accepted & Locked";
  showToast(
    "Route BZ-204 Accepted",
    "Driver Kabelo accepted all 4 pooled township deliveries.",
  );
}

function driverStartRoute() {
  state.trackingStage = 4;
  updateTrackingDisplay();
  showToast(
    "Navigation Started",
    "Hilux Bakkie en route from Soshanguve Hub to Mamelodi West.",
  );
}

function markCollected(orderId) {
  showToast(
    "Package Collected",
    `Order #${orderId} verified and loaded into Bakkie.`,
  );
  const btn = document.getElementById(`btnCollect${orderId}`);
  if (btn) {
    btn.innerText = "Collected ✓";
    btn.className =
      "px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold rounded-lg cursor-default";
  }
  state.trackingStage = 3;
  updateTrackingDisplay();
}

let activeOtpTargetOrder = "BZ101";

function openOtpVerificationModal(orderId, recipientName) {
  activeOtpTargetOrder = orderId;
  document.getElementById("otpOrderIdDisplay").innerText = `#${orderId}`;
  document.getElementById("otpRecipientName").innerText = recipientName;
  // Reset inputs
  [1, 2, 3, 4].forEach((i) => (document.getElementById(`pin-${i}`).value = ""));
  document.getElementById("otpErrorMessage").classList.add("hidden");
  openModal("otpModal");
  setTimeout(() => document.getElementById("pin-1").focus(), 100);
}

function movePinFocus(index) {
  const val = document.getElementById(`pin-${index}`).value;
  if (val && index < 4) {
    document.getElementById(`pin-${index + 1}`).focus();
  }
  if (index === 4 && val) {
    // Auto-check on 4th digit
    submitOtpVerification();
  }
}

function submitOtpVerification() {
  const pin = [1, 2, 3, 4]
    .map((i) => document.getElementById(`pin-${i}`).value)
    .join("");
  const expectedOtp = "7392";

  if (pin === expectedOtp) {
    // SUCCESS
    closeModal("otpModal");
    state.trackingStage = 6;
    updateTrackingDisplay();

    // Trigger Confetti Celebration for judges
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }

    // Update Stop 1 UI
    const stop1Status = document.getElementById("stop1-status-text");
    if (stop1Status) stop1Status.innerText = "Delivered & OTP Verified ✓";
    const stop1Card = document.getElementById("driver-stop-1");
    if (stop1Card)
      stop1Card.className =
        "p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3";

    const btnDeliver = document.getElementById("btnDeliverBZ101");
    if (btnDeliver) {
      btnDeliver.innerText = "Delivered ✓";
      btnDeliver.className =
        "px-3 py-1.5 bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm cursor-default";
    }

    // Update Mama Order Status
    const mamaStatus = document.getElementById("mamaOrderStatus");
    if (mamaStatus)
      mamaStatus.innerText = "Status: Delivered (Verified by OTP)";

    showToast(
      "Delivery Confirmed!",
      "OTP 7392 verified! Proof of delivery generated.",
    );
    setTimeout(() => openModal("podModal"), 800);
  } else {
    document.getElementById("otpErrorMessage").classList.remove("hidden");
  }
}

function triggerSimulatedMovement() {
  state.trackingStage = (state.trackingStage % 6) + 1;
  updateTrackingDisplay();
  showToast(
    "Simulated GPS Advanced",
    `Vehicle shifted to Stage ${state.trackingStage} of 6.`,
  );
}

function updateTrackingDisplay() {
  const stage = state.trackingStage;
  const progressPercent = Math.min(100, Math.round((stage / 6) * 100));
  const progressBar = document.getElementById("trackingProgressLine");
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  // Vehicle coordinate simulation
  const coords = [
    "-25.5398° S, 28.1022° E (Soshanguve Hub)",
    "-25.6021° S, 28.1904° E (R80 Highway)",
    "-25.6672° S, 28.2510° E (N1 Interchange)",
    "-25.7144° S, 28.3621° E (Mamelodi Approach)",
    "-25.7099° S, 28.3580° E (Section D West)",
    "-25.7088° S, 28.3565° E (Mama Thandi Spaza)",
  ];
  document.getElementById("telemetryCoordinates").innerText =
    coords[stage - 1] || coords[3];

  // Move SVG vehicle
  const svgVehicle = document.getElementById("svgVehicle");
  if (svgVehicle) {
    const xPositions = [120, 220, 340, 420, 460, 480];
    const yPositions = [180, 130, 150, 160, 160, 160];
    const targetX = xPositions[stage - 1] || 420;
    const targetY = yPositions[stage - 1] || 160;
    svgVehicle.setAttribute("transform", `translate(${targetX}, ${targetY})`);
  }
}

function simulateScanSuccess() {
  closeModal("driverScannerModal");
  markCollected("BZ101");
  showToast(
    "QR Code Verified",
    "Package label matched Order #BZ101 (Mama Thandi Spaza).",
  );
}

function renderDemoDots() {
  const container = document.getElementById("demoStepDots");
  if (!container) return;
  container.innerHTML = demoSteps
    .map(
      (s) => `
    <button onclick="goToDemoStep(${s.step})" title="${s.title}" class="w-2.5 h-2.5 rounded-full transition ${s.step === state.demoStep ? "bg-amber-400 scale-125" : s.step < state.demoStep ? "bg-bizblue-400" : "bg-slate-700"}"></button>
  `,
    )
    .join("");
}

function goToDemoStep(stepNum) {
  state.demoStep = stepNum;
  const cur = demoSteps[stepNum - 1];

  document.getElementById("demoStepIndicator").innerText =
    `Step ${cur.step} of 15`;
  document.getElementById("demoStepTitle").innerText = cur.title;

  renderDemoDots();

  // Execute Step Action
  switchRole(cur.role);
  if (cur.subtab && cur.role === "local_business") {
    setBusinessSubTab(cur.subtab);
  }

  // Contextual automations per step
  if (cur.step === 10) markCollected("BZ101");
  if (cur.step === 12) openOtpVerificationModal("BZ101", "Mama Thandi Spaza");
  if (cur.step === 14) openModal("podModal");

  showToast(cur.title, cur.desc);
}

function nextDemoStep() {
  if (state.demoStep < state.totalSteps) {
    goToDemoStep(state.demoStep + 1);
  } else {
    showToast(
      "Demo Journey Complete",
      "Successfully demonstrated the full BizLink township commerce loop!",
    );
  }
}

function prevDemoStep() {
  if (state.demoStep > 1) {
    goToDemoStep(state.demoStep - 1);
  }
}

function resetDemo() {
  goToDemoStep(1);
}

function toggleDemoDrawer() {
  goToDemoStep(1);
}

function saveNewSupplierProduct() {
  const name = document.getElementById("newProdName").value;
  const price = parseFloat(document.getElementById("newProdPrice").value) || 50;
  const stock = parseInt(document.getElementById("newProdStock").value) || 100;
  const category = document.getElementById("newProdCategory").value;

  if (!name) {
    alert("Please enter product name");
    return;
  }

  state.products.push({
    id: `prod-${Date.now()}`,
    name: name,
    supplier: "Soshanguve Wholesale Hub",
    businessType: "Wholesale Hub",
    location: "Block TT, Soshanguve North",
    price: price,
    spazaRetailPrice: Math.round(price * 1.2),
    stock: stock,
    category: category,
    verified: true,
    badge: "Wholesale Hub",
    icon: "fa-box",
  });

  closeModal("addProductModal");
  renderSupplierProducts();
  showToast(
    "Product Created",
    `${name} is now live in Wholesale Hub catalogue.`,
  );
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function showToast(title, message) {
  const toast = document.getElementById("toastNotification");
  const tTitle = document.getElementById("toastTitle");
  const tMsg = document.getElementById("toastMessage");
  if (!toast) return;

  tTitle.innerText = title;
  tMsg.innerText = message;

  toast.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 3800);
}

function printOrCopyReceipt() {
  const receiptText = `BIZLINK PROOF OF DELIVERY\nOrder: #BZ101\nRecipient: Mama Thandi Spaza (Mamelodi West)\nSupplier: Soshanguve Wholesale Hub\nTransporter: Kabelo (Hilux Bakkie ND 842-119)\nRoute: Pooled BZ-204\nOTP Verified: 7392\nGPS: -25.7144 S, 28.3621 E\nStatus: DELIVERED`;

  const tempInput = document.createElement("textarea");
  tempInput.value = receiptText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  showToast("Receipt Copied", "Proof of delivery text copied to clipboard.");
}

window.onload = function () {
  renderDemoDots();
  renderSupplierProducts();
  renderMamaOrderHistory();
  renderB2BOrderProducts();
  renderMarketplace();
  updateTrackingDisplay();

  // Start on Local Business (Mama Thandi) as default
  switchRole("local_business");
};
