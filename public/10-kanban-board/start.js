(() => {
  // เริ่มเขียนโค้ด
  let dragingElement;

  function onDragStart() {
    dragingElement = this;
  }

  function onDrop() {
    this.append(dragingElement);
    dragingElement = null;
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDragEnter(event) {
    event.preventDefault();
  }

  function run() {
    const taskElements = Array.from(document.querySelectorAll('.task'));
    const dropZoneElements = Array.from(document.querySelectorAll('.drop-zone'));

    taskElements.forEach((taskElement) => {
      taskElement.addEventListener('dragstart', onDragStart);
    });

    dropZoneElements.forEach((dropZoneElement) => {
      dropZoneElement.addEventListener('drop', onDrop);
      dropZoneElement.addEventListener('dragover', onDragOver);
      dropZoneElement.addEventListener('dragenter', onDragEnter);
    });

  }

  run();

})();
