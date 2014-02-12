# To update screenshot files, replace old screenshot(s) and `make`


CONVERT_CMD=convert -geometry 1000x1000 -quality 85%

.PHONY : all clean

all : small/opensuse_kde.jpg small/windows_xp.jpg small/conversion_parameters.jpg

clean :
	rm -rf small/*

small/opensuse_kde.jpg : opensuse_kde.png
	$(CONVERT_CMD) opensuse_kde.png small/opensuse_kde.jpg

small/windows_xp.jpg : windows_xp.png
	$(CONVERT_CMD) windows_xp.png small/windows_xp.jpg

small/conversion_parameters.jpg : conversion_parameters.png
	$(CONVERT_CMD) conversion_parameters.png small/conversion_parameters.jpg
